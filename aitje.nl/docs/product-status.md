# Producten publiceren en uitschakelen

Beheer producten in `app/content/products.ts`.

- `status: "available"`: beschikbaar, zichtbaar in previews en op de overzichts- en detailpagina.
- `status: "planned"`: zichtbaar als product in ontwikkeling.
- `status: "disabled"`: niet gepubliceerd. Verdwijnt uit productkaarten, navigatie, footer, gerelateerde producten, productvragen in de FAQ, contactkeuzes, case-links en sitemap. De eigen URL geeft een 404.

Bij een beschikbaar product vervang je `status: "available"` door `status: "disabled"`.

Bij een product binnen `planned({ ... })` voeg je `status: "disabled"` toe. Verwijder die regel om het weer als product in ontwikkeling te publiceren.

De productgegevens blijven bewaard. Uitschakelen verwijdert geen afbeeldingen of caseverhalen. Na een wijziging moet de site opnieuw gebouwd en gepubliceerd worden om de live website bij te werken; lokaal verwerkt Nuxt de wijziging tijdens development.
