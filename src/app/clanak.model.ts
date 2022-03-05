export class Clanak {
    public naziv: string;
    public autor: string;
    public sadrzaj: string;
    public slika: string;

    constructor(nazivv: string, autorr: string, sadrzajj:string, slikaa:string){
        this.naziv = nazivv;
        this.autor = autorr;
        this.sadrzaj=sadrzajj;
        this.slika=slikaa;
    }
}