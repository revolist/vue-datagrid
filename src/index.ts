import { RevoGrid } from '@revolist/revogrid/dist/types/interfaces';
import { VNode } from '@revolist/revogrid/dist/types/stencil-public-runtime';
import Numbro from 'numbro';

const defaultFormat: Numbro.Format = {
    thousandSeparated: true,
    mantissa: 2,
    optionalMantissa: true
};

export default class NumberColumnType {
    private readonly numbroNumberFormat: Numbro.Format;
    constructor(numbroNumberFormat?: Numbro.Format) {
        if (!numbroNumberFormat) {
            this.numbroNumberFormat = defaultFormat;
        } else {
            this.numbroNumberFormat = numbroNumberFormat;
        }
    }
    columnProperties(): RevoGrid.CellProps {
        return {
            class: {
                ['align-center']: true
            }
        };
    }

    cellProperties(): RevoGrid.CellProps {
        return {
            class: {
                ['align-right']: true
            }
        };
    }

    formated(val: number): string {
        return Numbro(val).format(this.numbroNumberFormat)
    }

    cellTemplate(_h: RevoGrid.HyperFunc<VNode>, p: RevoGrid.ColumnDataSchemaModel): string {
        const parsed = parseInt(p.model[p.prop], 10);
        if (isNaN(parsed)) {
            return '';
        }
        return this.formated(parsed);
    }
}
