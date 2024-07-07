
import { Company } from "../models/company.model.js";

export const addCompany = async (req, res) => {
  const company = await Company.create(req.body);
  return res.json(company);
};