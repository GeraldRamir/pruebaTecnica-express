import axios from "axios"
import prisma from "../../prisma/client"
import { countryDTO } from "./country.dto"

export class CountrySeervice{
    async fetchAndSaveCountries(){
        const {data}= await axios.get("https://restcountries.com/v3.1/all")
        const countries= data.map((c: any)=>({
            name: c.name.common,
            capital: c.capital ? c.capital[0]: null,
            region: c.region,
            population: c.population,
            flag: c.flags?.png || null

        }))

        await prisma.country.createMany({
            data: countries,
            skipDuplicates: true,
        })
        return {
            message: "Countries imported successfully",
            count: countries.length
        }

    }
    
    async getAll(){
        return prisma.country.findMany()
        
    }
    async getById(id: number){
        return prisma.country.findUnique({where: {id}})
    }
    async create(data: countryDTO){
        return prisma.country.create({data})
    }

    async update(id: number, data: countryDTO){
        return prisma.country.update({where: {id}, data})
    }
    async delete(id:number){
        return prisma.country.delete({where: {id}})

    }
}