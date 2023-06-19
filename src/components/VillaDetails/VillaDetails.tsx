import Image from 'next/image'
import React from 'react'
import Modal from 'src/stories/Modal/Modal'
import logo2 from "@/images/Minto2.jpg"

import { WifiIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon, BoltIcon } from "@heroicons/react/24/outline";

export default function VillaDetails() {
    const amenities = [
        {icon: "WifiIcon", text: "High-speed Wi-Fi."},
        {icon: "", text: "100% Power back up."},
        {icon: "", text: "Daily housekeeping & full-time cook."},
        {icon: "", text: "Transportation services."},
        {icon: "", text: "Breakfast included. Other meals are available."},
        {icon: "UserCircleIcon", text: "Services of a dedicated chef and housekeeper."},
        {icon: "", text: "High-quality bed & bath linen."},
        {icon: "", text: "Luxury bath amenities by Inara."},
        {icon: "", text: "Heating in all rooms."},
        {icon: "", text: "Pure drinking water in all faucets of the house."},
        {icon: "BoltIcon", text: "100% solar and battery power backup."},
        {icon: "", text: "Laundry service available - 24 hrs turnaround."},
        {icon: "", text: "Curated experiences of the Nilgiris."},
        {icon: "", text: "LUX Concierge & Guest Relations Service."},
        {icon: "", text: "Intimate dining space with scenic views."},
        {icon: "", text: "Dreamy open-plan kitchen for DIY cooking."},
        {icon: "", text: "Authentic local South Indian cuisine with suggested daily set menus for meals."},
        {icon: "", text: "Beautiful lawn with outdoor seating."}
    ];

  return (
    <div>
      <Modal
        isOpen={true}
        onClose={() => console.log()}
        title={<div>
            <div><Image src={logo2} width={100} height={150} alt="" /></div>
            <div>
                <h2>Master Bedroom</h2>
                <p>2-3 Gust • Personal Bathroom</p>
                <p>₹1200 per/night</p>
            </div>
        </div>}
      >
        <div>
            <h2>Master Bedroom Details</h2>
            <p>Deja View is a beautiful 2-bedroom plantation-style luxury villa with locally-inspired design and contemporary interiors that makes it one of the most romantic vacation homes in South India. The villa is part of a private community of six homes set on top of a hill in a 14-acre coffee & cardamom plantation in Eastern Wayanad, Kerala. From your verandah enjoy sweeping and unhindered views of rainforest clad hills. Indoors, an open plan design comprising two tastefully furnished bedrooms and a gorgeous loft make for an intimate & enjoyable holiday.</p>
            <h2 className='font-bold'>Master Bedroom Amenities</h2>
            
            <div className='flex flex-wrap'>
                {amenities.map((el, idx)=> (
                    <div key={idx} className='flex gap-2 justify-start items-center w-1/2 leading-8'>
                        {/* <UserCircleIcon className="w-5" /> */}
                        <p>{el.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </Modal>
    </div>
  )
}

