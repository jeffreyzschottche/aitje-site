from decimal import Decimal, ROUND_HALF_UP
from enum import Enum


class Tarief(Enum):
    HOOG = Decimal("0.21")
    LAAG = Decimal("0.09")
    NUL = Decimal("0.00")


def btw_bedrag(bedrag_excl: Decimal, tarief: Tarief) -> Decimal:
    """Bereken de btw en rond halve centen naar boven af."""
    return (bedrag_excl * tarief.value).quantize(
        Decimal("0.01"), rounding=ROUND_HALF_UP
    )


def bedrag_incl(bedrag_excl: Decimal, tarief: Tarief) -> Decimal:
    return bedrag_excl + btw_bedrag(bedrag_excl, tarief)
