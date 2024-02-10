import axios from "axios";
import { variables } from "../Variables";

export interface IStudentDetails {
  StudentId:string,
  StudentFirstName:string,
  StudentLastName:string,
  DesignId:string,
  ProductToPrintOn:string,
  PartOfSongToPrint:string
}



class StudentDetailsService {

  getUsers = async () => {
    return axios.get(variables.API_URL + `User/GetAllUsers`,
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            responseType: "json",
        })

}
  getUserDetails = async (data: string) => {
    return axios.get(variables.API_URL + `User/GetUserDetails?id=${data}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        responseType: "json",

      })
    // .then(res => {
    //   if (res)
    //    this.userDetails=res.data;
    //   //  console.log("this.userDetails",this.userDetails)

    // })
  }

  addUser = async (user: IStudentDetails) => {
    console.log("student_details from sevice",user);

    await axios.post(variables.API_URL + `User/AddUser`, user)
      .catch((error) => {
        console.log(error)
      })
  }




}
const studentDetailsService = new StudentDetailsService();
export default studentDetailsService;