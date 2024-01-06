import { useState } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import next from "../../assests/next.png"
import img1 from "../../assests/cup.png"
import img2 from "../../assests/camera.png"
import img3 from "../../assests/hat.png"
import img4 from "../../assests/product4.png"
import img5 from "../../assests/product5.png"
import img6 from "../../assests/product6.png"
import prev from "../../assests/prev.png"
import chooseprintbase from "../../assests/chooseprintbase.png"

import './Product.css'
import studentDetailsService, { IStudentDetails } from "../../service/StudentDetailsService";
export default function Product() {
    const navigate = useNavigate();
    const location = useLocation();

    const { partOfSong } = location.state;
    const [flag, setFlag] = useState<boolean>(false);
    const { nameparam, phonenumberparam, design } = useParams();

    const [printBase, setPrintBase] = useState("");
    const btns: any = [
        { img: img1, id: "cup" },
        { img: img2, id: "camera" },
        { img: img3, id: "hat" },
        { img: img4, id: "product4" },
        { img: img5, id: "product5" },
        { img: img6, id: "product6" },]

    const student_details: IStudentDetails = {
        StudentId: "",
        StudentFirstName: "",
        StudentLastName: "",
        DesignId: "",
        ProductToPrintOn: "",
        PartOfSongToPrint: ""
    };
    const nextPage = async () => {

        navigate("../Logout");
        // if (password)

        student_details.StudentId = phonenumberparam ? phonenumberparam : "";
        student_details.StudentFirstName = nameparam ? nameparam : "";
        student_details.PartOfSongToPrint = partOfSong ? partOfSong : "";
        student_details.DesignId = design ? design : "";
        student_details.ProductToPrintOn = printBase ? printBase : "";

console.log("student_details from product",student_details);

        await studentDetailsService.addUser(student_details);


    }
    const prevPage = async () => {
        navigate(-1);

    }

    const chosenPrintBase = async (id: any) => {

        setPrintBase(id)
        setFlag(true)
        console.log({ nameparam });
        console.log({ phonenumberparam });
        console.log({ design });
        console.log({ printBase });
        console.log({ partOfSong });
    }
    return (<div className="product">
        {flag && <><img className="prev" src={prev} onClick={() => prevPage()} />
            <img className="next" src={next} onClick={() => nextPage()} /></>}
        <img className="chooseprintbase" src={chooseprintbase} />

        <div className="chooseprintbasebtns">
            {btns?.map((btn: any) =>
                <img className="chooseprintbasebtnsBtn" src={btn.img} onClick={() => chosenPrintBase(btn.id)} />
            )}
        </div>

    </div>

    )
}








