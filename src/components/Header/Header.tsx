import React, { useState } from "react";
import Carousal from "src/stories/Carousal";
import Topbar from "src/stories/Topbar";
import img from "../../../public/images/a01.png";
import Search from "src/stories/Search";
import Datepicker from "src/stories/DatePicker";

const images = [
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqRiFw4DkYgYUW42qU4eCx1cDxs_eHzWscA&usqp=CAU',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7UDrOxfaETcAUcXIqO-XfYE_CDWyD2_gSg&usqp=CAU',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjiIXBR1fb2Za2HXavZBsPRCKMyhA0Uzrh5A&usqp=CAU',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOvzoiFllNnDnyodkmbLG3BmAjjCyq0brVg&usqp=CAU',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu7T_TSNJSxWdM5aNaekEunO3v1CYGSmlxg&usqp=CAU'
  "/images/02_Exterior_1.jpg",
  "/images/a01.png",
  "/images/a02.png",
  "/images/a03.png",
  "/images/a04.png",
  "/images/a05.png",
  "/images/a06.png",
  "/images/a07.png",
  "/images/a08.png",
];
const Header = () => {
  const [showDate, setShowDate] = useState(false);
  return (
    <>
      <Topbar />
      <Carousal images={images} />
     {/* <div className="-mt-20"> */}
     <Search 
      />
     {/* </div> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati numquam ex magni, distinctio accusamus. Consequatur, dolores doloribus! Sit ducimus officia illum, porro recusandae nesciunt sunt fugiat voluptatem, dolore in rerum impedit rem sapiente! Beatae magni asperiores aspernatur atque ipsam doloribus exercitationem laboriosam! Inventore modi corporis laborum cum amet minus. Modi minus non illo impedit alias voluptatum soluta a repudiandae neque error, ipsa, accusantium doloremque quo maxime nostrum cupiditate numquam. Repellendus quia tenetur vitae iste, dolores nostrum modi, quas sapiente delectus dolorum similique, ullam fugit id! Cupiditate veniam fuga nisi iure autem optio nesciunt et laudantium facilis, id soluta ab harum. Non, velit dignissimos. Molestias rem deserunt neque ratione expedita non qui odio facilis. Ut voluptatum accusamus similique, aliquam reprehenderit doloremque architecto assumenda, officia dolore deserunt quibusdam eaque voluptatem nesciunt facilis praesentium dolorem vel dolor exercitationem recusandae alias fuga dolores illo itaque. Eaque cum repudiandae similique, delectus, aperiam ipsa velit quo explicabo, magni nihil reprehenderit eligendi iusto odit. Eveniet facilis, sed consequatur saepe porro dolores laborum, facere, a nemo architecto iste eaque! Alias quidem quam dolor eaque quod. Debitis blanditiis amet laborum eveniet aspernatur reiciendis necessitatibus commodi obcaecati cum voluptatum? Tenetur, eos atque aperiam quae laudantium nisi fugit deserunt ab?
      </p>
      {/* <Datepicker /> */}
    </>
  );
};

export default Header;
