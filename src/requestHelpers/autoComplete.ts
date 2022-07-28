import axios from "axios";
import {IautoComplete } from "./types/IautoComplete"

export async function getAutoComplete(chemicalName: string): Promise<IautoComplete[]> {

  return await axios
    .get<IautoComplete[]>(import.meta.env.VITE_URL_AUTOCOMPLETE, {
      params: {
        chemical_name: chemicalName
      }
    })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      console.error(
        e.response.data.Error || "Unknown error"
      );
      return [];
    });
}
