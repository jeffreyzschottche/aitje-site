"""Blender-authored illustrative connector models for the AITJE case.
Run in a separate factory-startup Blender process; no user scene is modified.
These demonstrate the viewer, not verified CAD models from the client catalog.
"""
import bpy, math, os
from mathutils import Vector

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'public', 'models', 'contact-leads')
IMG = os.path.join(ROOT, 'public', 'img', 'cases')
os.makedirs(OUT, exist_ok=True)
os.makedirs(IMG, exist_ok=True)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

def material(name, color, metallic=0, rough=.4):
    m=bpy.data.materials.new(name);m.use_nodes=True
    bs=m.node_tree.nodes.get('Principled BSDF')
    bs.inputs['Base Color'].default_value=(*color,1)
    bs.inputs['Metallic'].default_value=metallic
    bs.inputs['Roughness'].default_value=rough
    m.diffuse_color=(*color,1)
    return m
rubber=material('Matte black polymer',(.025,.029,.035),0,.35)
ribmat=material('Strain relief',(.045,.052,.061),0,.46)
red=material('Positive lead insulation',(.52,.009,.019),0,.32)
black=material('Negative lead insulation',(.008,.01,.015),0,.43)
brass=material('Brass contacts',(.65,.39,.095),.85,.23)
silver=material('Tinned copper terminals',(.48,.52,.57),.9,.2)
inner=material('Socket interior',(.003,.004,.006),0,.6)

def finish(obj, name, mat, parent=None):
    obj.name=name;obj.data.materials.append(mat)
    if parent:obj.parent=parent
    if obj.type=='MESH':
        for poly in obj.data.polygons:poly.use_smooth=True
    return obj
def box(name, loc, size, mat, parent=None, bevel=.045):
    bpy.ops.mesh.primitive_cube_add(size=1,location=loc)
    o=bpy.context.object;o.dimensions=size
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    b=o.modifiers.new('Molded edge radii','BEVEL');b.width=bevel;b.segments=3
    o.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
    return finish(o,name,mat,parent)
def cylinder(name,loc,radius,depth,mat,parent=None):
    bpy.ops.mesh.primitive_cylinder_add(vertices=40,radius=radius,depth=depth,location=loc,rotation=(math.pi/2,0,0))
    o=bpy.context.object
    b=o.modifiers.new('Machined edge','BEVEL');b.width=.012;b.segments=2
    return finish(o,name,mat,parent)
def tube(name, points, mat, radius=.042, parent=None):
    curve=bpy.data.curves.new(name,'CURVE');curve.dimensions='3D';curve.resolution_u=20
    curve.bevel_depth=radius;curve.bevel_resolution=4
    s=curve.splines.new('BEZIER');s.bezier_points.add(len(points)-1)
    for p,co in zip(s.bezier_points,points):p.co=co;p.handle_left_type='AUTO';p.handle_right_type='AUTO'
    o=bpy.data.objects.new(name,curve);bpy.context.collection.objects.link(o)
    return finish(o,name,mat,parent)
def empty(name,loc=(0,0,0),parent=None):
    o=bpy.data.objects.new(name,None);bpy.context.collection.objects.link(o);o.location=loc;o.parent=parent;return o
def plug(name,loc,angle,parent):
    root=empty(name,loc,parent);root.rotation_euler.z=angle
    box(name+' housing',(0,0,.16),(.51,.64,.32),rubber,root)
    box(name+' shoulder',(0,-.18,.17),(.57,.16,.36),ribmat,root,.025)
    box(name+' rear',(0,-.46,.15),(.30,.34,.25),rubber,root,.035)
    for n in range(5):box(name+' grip rib',(0,-.33-n*.047,.15),(.35,.024,.275),ribmat,root,.009)
    for x in [-.13,.13]:cylinder(name+' sleeve',(x,.37,.16),.123,.26,rubber,root)
    cylinder(name+' socket recess',(-.13,.509,.16),.091,.013,inner,root)
    cylinder(name+' recessed terminal',(-.13,.515,.16),.042,.014,brass,root)
    cylinder(name+' exposed contact',(.13,.565,.16),.051,.18,brass,root)
    box(name+' center seam',(0,.11,.326),(.009,.29,.006),ribmat,root,.002)
    return root
def cable_pair(prefix,points,parent):
    for dx,mat,tag in [(-.047,red,'red'),(.047,black,'black')]:tube(prefix+' '+tag,[(x+dx,y,z) for x,y,z in points],mat,parent=parent)
def ring(name,loc,mat,parent):
    root=empty(name,loc,parent)
    # Ring terminal lies in the XY plane; its eye is a real hole.
    bpy.ops.mesh.primitive_torus_add(major_radius=.145,minor_radius=.038,major_segments=48,minor_segments=12,location=(0,0,.05))
    finish(bpy.context.object,name+' eye',silver,root)
    box(name+' tab',(0,-.19,.05),(.17,.20,.06),silver,root,.02)
    cylinder(name+' crimp',(0,-.34,.05),.067,.21,mat,root)

models=[]
root=empty('SAE twin lead');models.append(('sae-twin-lead',root))
plug('Connector A',(-1.15,.75,0),-.45,root)
plug('Connector B',(1.18,.75,0),.45,root)
cable_pair('Twin lead',[(-1.40,.22,.15),(-1.65,-.7,.15),(-.9,-1.25,.15),(0,-1.38,.15),(.9,-1.25,.15),(1.65,-.7,.15),(1.42,.22,.15)],root)
# Protective cap and tether, as in the supplied product reference.
cap=empty('Protective cap',(1.8,.48,.04),root);cap.rotation_euler.z=-.5
box('Cap shell',(0,0,.14),(.48,.36,.3),rubber,cap)
tube('Flexible cap tether',[(1.4,.43,.28),(1.75,.06,.28),(2.10,.23,.20),(1.94,.52,.14)],ribmat,.025,root)

root=empty('SAE to ring terminals');models.append(('ring-terminal-lead',root))
plug('Quick connector',(1.0,.80,0),.2,root)
tube('Positive lead',[(1.03,.17,.15),(.8,-.5,.15),(-.4,-.8,.10),(-1.35,-.15,.07),(-1.3,.42,.05)],red,parent=root)
tube('Negative lead',[(1.14,.18,.15),(.7,-.8,.15),(-.5,-1.02,.1),(-1.95,-.13,.07),(-1.95,.4,.05)],black,parent=root)
ring('Positive ring',(-1.3,.74,0),red,root);ring('Negative ring',(-1.95,.72,0),black,root)

root=empty('SAE Y adapter');models.append(('y-adapter',root))
plug('Input',(0,-1.0,0),math.pi,root)
plug('Output left',(-1.05,.95,0),-.4,root)
plug('Output right',(1.05,.95,0),.4,root)
box('Splitter joint',(0,0,.15),(.37,.34,.25),rubber,root)
cable_pair('Input lead',[(0,-.4,.15),(0,-.2,.15),(0,0,.15)],root)
cable_pair('Left branch',[(0,.1,.15),(-.7,.16,.15),(-1.26,.43,.15)],root)
cable_pair('Right branch',[(0,.1,.15),(.7,.16,.15),(1.28,.43,.15)],root)

# Convert curves and apply bevels before exporting portable mesh assets.
for o in list(bpy.context.scene.objects):
    if o.type in {'CURVE','MESH'}:
        bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o
        if o.type=='CURVE':bpy.ops.object.convert(target='MESH')
        else:
            for mod in list(o.modifiers):bpy.ops.object.modifier_apply(modifier=mod.name)
def descendants(root):return [root]+list(root.children_recursive)
for name,root in models:
    bpy.ops.object.select_all(action='DESELECT')
    for o in descendants(root):o.select_set(True)
    bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,name+'.glb'),export_format='GLB',use_selection=True,export_cameras=False,export_lights=False)
    print('EXPORTED',name,flush=True)

scene=bpy.context.scene
for _,root in models[1:]:
    for o in descendants(root):o.hide_render=True
scene.render.engine='CYCLES';scene.cycles.samples=24;scene.cycles.use_denoising=True
scene.render.resolution_x=1600;scene.render.resolution_y=1200;scene.render.resolution_percentage=100
scene.render.film_transparent=True
scene.world.color=(.5,.5,.5)
scene.view_settings.view_transform='AgX'
def aim(o,target):o.rotation_euler=(Vector(target)-o.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(3.8,-5.8,6.6));cam=bpy.context.object;aim(cam,(.15,-.2,.1));cam.data.type='ORTHO';cam.data.ortho_scale=5.6;scene.camera=cam
for name,loc,energy,size in [('Key',(-3,-4,7),650,5),('Fill',(4,2,6),900,4),('Edge',(-2,4,3),500,3)]:
    bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.name=name;o.data.energy=energy;o.data.shape='DISK';o.data.size=size;aim(o,(0,0,0))
scene.render.image_settings.file_format='PNG';scene.render.filepath=os.path.join(IMG,'contact-lead.png')
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'contact-leads.blend'))
bpy.ops.render.render(write_still=True)
print('RENDERED',scene.render.filepath,flush=True)
