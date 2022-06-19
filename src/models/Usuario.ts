interface Usuario {
    id?: number| null;
    nome?: string;
    email?: string;
    senha?: string;
    foto?: string| null;
    tipo?: string| null;
}

export default Usuario;