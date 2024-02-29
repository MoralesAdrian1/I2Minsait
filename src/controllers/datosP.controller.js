import DatosP from "../models/datosP.model"

export const getAllDatosP =async(req, res) =>{
    try{
    const datosP = await DatosP.find({
        user: req.user.id
}).populate('user');
    res.json(datosP);
} catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDatosP =async(req, res) =>{
    const{ telefono, date, sexo, cp, pais, estado, ciudad } = req.body;

    const newDatosP = ({ 
        telefono, 
        date, 
        sexo, 
        cp,
        pais,
        estado,
        ciudad,
        user: req.user.id,
    });
    const savedDatosP = await newDatosP.save();
    res.json(savedDatosP);
};
export const getDatosP =async(req, res) =>{
    const datosP = await DatosP.findById(req.params.id).populate('user');
    if(!datosP) return res.status(404).json({message:'Datos not found'})
    res.json(datosP);
};
export const deleteDatosP =async(req, res) =>{
    const datosP = await DatosP.findByIdAndDelete(req.params.id)
    if(!datosP) return res.status(404).json({message:'Datos not found'})
    return res.sendStatus(204);
}

export const updateDatosP =async(req, res) =>{
    const datosP = await DatosP.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    })
    if(!datosP) return res.status(404).json({message:'Datos not found'})
    res.json(datosP);
};

