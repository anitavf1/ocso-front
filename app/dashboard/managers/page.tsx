import { LuPlus } from "react-icons/lu";
import ModalGeneric from "../_components/ModalGeneric";
import FormCreateManager from "./[id]/_components/FormCreateManager";
import ManagerCards from "./_components/ManagerCards";
import { authHeaders } from "@/helpers/authHeaders";
import { Location } from "@/entities";
const ManagersPage  = async () => {
   const responseStores= await fetch(`${API_URL}/locations`, {
      headers:{
         ...authHeaders(),
      }
   })
   const stores: Location [] = await responseStores.json()
   return <ModalGeneric icon={<LuPlus size="20"/>}>
      <FormCreateManager stores={stores}/>

      
   </ModalGeneric>
}

export default ManagersPage;