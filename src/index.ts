import { RevoGrid } from '@revolist/revogrid/dist/types/interfaces';
import { VNode } from '@revolist/revogrid/dist/types/stencil-public-runtime';
import numeral from 'numeral';

const defaultFormat: string = '0,0[.]00';

export default class NumberColumnType {
    private readonly numberFormat: string;
    constructor(format?: string, private emiter?: (event: string, instance: Numeral) => void) {
        if (!format) {
            this.numberFormat = defaultFormat;
        } else {
            this.numberFormat = format;
        }
    }
    columnProperties = (): RevoGrid.CellProps => ({ class: { ['align-center']: true }});

    cellProperties = (): RevoGrid.CellProps => ({ class: { ['align-right']: true } });

    cellTemplate = (_h: RevoGrid.HyperFunc<VNode>, p: RevoGrid.ColumnDataSchemaModel): string => {
        const parsed = parseFloat(p.model[p.prop], 10);
        if (isNaN(parsed)) {
            return '';
        }
        return this.formated(parsed);
    };

    formated(val: number): string {
        const num = numeral(val);
        if (this.emiter) {
            this.emiter('beforeValueFormatted', num);
        }
        return num.format(this.numberFormat)
    }
    
    /** Get numeral instance in case you don't want to add any in your project */
    static getNumeralInstance(): Numeral {
        return numeral;
    }
}
