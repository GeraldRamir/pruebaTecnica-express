import { Request, Response, NextFunction } from "express";
import { CountrySeervice } from "./country.services";
import { countrySchema } from "./country.dto";

const service= new CountrySeervice()


export class countryController{
    
    async fetchCountries( req: Request, res: Response, next: NextFunction){
        try {
            const result= await service.fetchAndSaveCountries()
            res.json(result)
            
        } catch (error) {
            next(error)
            
        }

    }
    async getAll(req: Request, res: Response, next: NextFunction){
        try {
            const countries= await service.getAll()
            
        } catch (error) {
            next(error)
            
        }
    }
    async getById(req: Request, res: Response, next: NextFunction){
          try {
            const country= await service.getById(Number(req.params.id))
            if(!country) return res.status(404).json({message: "Country not found"})
            res.json(country)
        } catch (error) {
            next(error)
            
        }
    }
    async create(req: Request, res: Response, next: NextFunction){
          try {
            const parsed= countrySchema.parse(req.body);
            const newCountry= await service.create(parsed)

            res.status(201).json(newCountry)

        } catch (error) {
            next(error)
            
        }
    }
    async update(req: Request, res: Response, next: NextFunction){
          try {
            const parsed= countrySchema.parse(req.body);
            const update= await service.update(Number(req.params.id), parsed);

            res.json(update)

        } catch (error) {
            next(error)
            
        }
    }
    async delete (req: Request, res: Response, next: NextFunction){
         try {
            await service.delete(Number(req.params.id))

            res.json({message: "country deleted"})

        } catch (error) {
            next(error)
            
        }
    }
}