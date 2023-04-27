const Agua = require("../models/AguaModel");

module.exports = {
    async read(req, res){
        const aguaList = await Agua.find();
        return res.json(aguaList);
    },

    async create(req, res){
        const {Marca, ml, validade} = req.body;

        if(!Marca || !ml || !validade){
            return res.status(400).json({error: "Campo vazio"});
        }

        const aguaCriada = await Agua.create({
            Marca,
            ml,
            validade
        });
        return res.json(aguaCriada);
    },
    async delete(req,res){
        const{id} = await req.params;
        const aguaDeletada = await Agua.findOneAndDelete({_id:id});

        if(aguaDeletada){
            return res.json(aguaDeletada);
        }
        return res.status(401).json({error: "ID não encontrado"});
    },
    async update(req,res){
        const{id} = await req.params;
        const {Marca,ml,validade} = req.body;
        const agua = await Agua.findOne({_id:id});

        if(!Marca || !ml || !validade){
            return res.status(400).json({error: "Campo vazio"});
        }
        if(!agua){
            return res.status(401).json({error: "ID não encontrado"});
        }

            agua.Marca = Marca;
            agua.ml = ml;
            agua.validade = validade;

            await agua.save();

            return res.json(agua);

    },
    async procura(req,res){
        const{id} = await req.params;
        const aguaProcura = await Agua.findOne({_id:id});

        if(aguaProcura){
            return res.json(aguaProcura);
        }
        return res.status(401).json({error: "ID não encontrado"});
    }
}