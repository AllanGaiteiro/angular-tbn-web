export interface Versicle {
    abbrev: string; // exemple gn_1:1
    abbrevBoock: string; // gn
    numberVersicle: number; // exemple 1
    numberChapter: number; // exemple 1
    title: string; // geneses 1:1
    verse: string;
    version: 'pt_aa' | 'pt_acf' | 'pt_nvi';
}