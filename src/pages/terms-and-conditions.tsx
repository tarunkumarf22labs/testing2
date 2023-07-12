import Layout from "@/components/Layout";
import React from "react";
import { mediaImages } from "src/data/constants";
import MediaListing from "src/stories/MediaListing";

const TermsAndConditions = () => {
  return (
    <Layout title="luxunlock">
      <>
        <div className="w-full h-64 bg-[#7B8084]">
          <div className="text-sm font-semibold tracking-[4.20] text-center text-white uppercase pt-20">
            LUXUNLOCK’s
          </div>
          <div className="pt-5 text-5xl text-center text-white uppercase">
            TERMS & CONDITIONS
          </div>
        </div>
        <div className="w-11/12 m-auto mt-16 lg:max-w-5xl">
          <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
            {
              "By utilising this property rental booking arranged by Luxunlock Private Limited (LUX) and/or by making payment to LUX, either in part or in full, you confirm to have carefully read, understood and unconditionally accepted all the Booking Conditions governing this booking as stated herein and/or on LUX's website and/or elsewhere."
            }
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              1. Booking
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              {
                "A non-refundable advance equal to 50% of the property booking cost shall be paid on booking by credit card, cash or wire transfer. Cash payments cannot equal or exceed an aggregate of Indian Rs 200,000 per booking. Card payments will incur a surcharge of 3.5%. No contract with us shall exist until we have received the advance and signed Booking Contract, specifying the booking period and party traveling, and we have subsequently accepted and confirmed your booking. Should you later cancel, cancellation charges shall become payable in accordance with section 3. We reserve the right to refuse a booking without giving a reason. It is understood that this contract satisfies transitory housing needs only and that the contract automatically expires at the end of the booking period as stated on the Booking Contract. Failure to vacate the booking property by the end of the booking period shall automatically result in a fine of Rs 25,000 per day in addition to pro-rated booking charges for occupying the booked property with-out a contract. Any contract renewal shall take place at the offices of Luxunlock or its local representative. In such cases, the booking rate shall be re-negotiated and the Security Deposit shall be reassessed. All Extras shall be paid in full before any renewal of the contract."
              }
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              2. Payment of Balance{" "}
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              {
                "The balance of the property booking cost due as reflected on the Invoice shall be paid at least 60 days before departure. If the balance is not received by us by the due date, we shall be entitled to cancel the booking without prejudice to our claim for cancellation charges and to retain the advance. For bookings made within 60 days of departure date, you shall pay the full property booking cost at the time of booking. We reserve the right to adjust the balance due us should there be a greater than 2% fluctuation in the cost of currency. Please refer to section 1 for payment modalities."
              }
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              3. Cancellation & Refund Policy
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              If you cancel all or any part of your booking, or the booking is
              cancelled by us due to non-payment, then we shall be entitled to
              the following cancellation charges calculated as a percentage of
              the property booking cost: <br />
              <br />
              60 days or more before departure: 50% <br />
              Within 60 days of departure: 100%
              <br />
              <br />
              The above cancellation charges apply to the property booked only.
              Cancellation must be received by us in writing. We strongly
              encourage you to buy travel insurance at the time of booking to
              compensate you in the event you must cancel and forfeit funds.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              Cancellation Terms (For COVID Only)
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              {
                "100% credit voucher for days not stayed in case of government-imposed travel restrictions. Valid for six months. No refunds."
              }
              <br />
              {
                "All refunds will be processed within 7 working days and remitted to the customer's bank account as per details received."
              }
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              4. Alterations & Amendments by You
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              If you change your dates, such change shall be deemed a new
              booking and a cancellation of your previous booking for purposes
              of section 3. Your deposit shall be subject to the cancellation
              conditions in section 3.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              5. Alterations & Amendments by Us
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              We shall advise you at the earliest possible date if we have to
              make any changes to confirmed arrangements. If, for any reason
              beyond our control, we are unable to provide you with the property
              you have booked, we reserve the right to transfer you to a similar
              property; provided, however, that if such transfer is not possible
              or you do not wish to be transferred, we shall cancel the booking
              and refund the amount paid to us in full. The price difference of
              any transfer property, if greater, must be paid by you, and, if
              smaller, shall be reimbursed by us. We shall not be liable for any
              further obligations or claims by you. We reserve the right to
              cancel your booking, should we deem it to be of misrepresentative,
              fraudulent or competitive purpose, and the normal cancellation
              policy shall apply.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              6. No. Of Guests/Persons
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              Only persons listed on the Booking Contract shall use the booked
              property. The number of people using the booked property shall not
              exceed the number of sleeping places indicated in the Property
              Brochure. Infants in portable cribs (if available) may be
              accommodated over and above the number of persons permitted, but
              this must be explicitly agreed to in advance before the balance
              payment is due. Should a representative of the owner or of
              Luxunlock find any violations to this clause, it is up to her/his
              sole discretion to ask you to vacate the booked property without
              refund. Photocopies of ID proof such as Aadhaar/Driving
              Licence/Passport for all guests shall be provided in advance.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              7. Arrival & Departure Times
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              You shall arrive between 2pm and 6pm and leave between 6am and
              10am on the day of departure unless alternative arrangements have
              been made in advance, for which extra charges may apply. Please
              provide arrival details no later than 60 days before arrival. Do
              note that the property does not have any waiting area and it will
              not be possible for you to leave your luggage at the property,
              should you arrive earlier or depart later than scheduled or
              expected.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              8. Utilities & Other Extras
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              Most Extras are specified on the Property Brochure and Final
              Confirmation and shall either be paid in advance to Luxunlock or
              due in local currency on arrival/departure or during your stay.
              Extras due in advance to Luxunlock shall be itemized on your
              Invoice. Extras due in local currency shall be itemized on your
              Final Confirmation. If you leave without being checked out as
              arranged, you risk the forfeiture of your entire Security and/or
              Extras Deposit. We shall deduct the cost of any unpaid Extras from
              your Security Deposit if the correct amount is not paid on
              departure. Staff services shall be included and excluded as
              specified on your Property Brochure and Final Confirmation.
              Additional cleaning service and cooks may be available by
              sepa-rate payment. If you arrange in advance for additional
              services, you shall be responsible for the charges, even if you
              cancel. Pay-ment terms shall be the same as stated above for
              utilities. Please give us as much notice as possible for these
              services. Where the terms of Property Brochure and the Final
              Confirmation disagree, terms as stated on the Final Confirmation
              shall prevail.
              <br />
              <br />
              Some properties require an Extras Deposit for such purposes as
              having funds available to the booked property staff on or before
              arrival for advance shopping, Welcome Dinner, defraying the costs
              of utilities and the like. The Extras Deposit, if applicable,
              shall be paid simultaneously with the balance payment on the
              property booked or in Indian Rupees on arrival at the property.
              Extras Deposit funds shall be accounted for in full by the end of
              the stay. Remaining Extras Deposit funds shall be returned to you.
              Please review the Property Brochure for details on how the Extras
              Deposit, if applicable, shall be handled at your booked property.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              9. Security Deposits
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              Security Deposits shall be due on every property. The amount of
              each deposit shall be specified on the Property Brochure and on
              the Invoice you receive after paying the 50% deposit and
              return-ing the signed Booking Contract and shall be held in a
              non-interest bearing account. The Security Deposit covers the cost
              of any damage or breakages during your stay to the booked property
              and its contents, inside and outside, excluding normal wear, and
              shall be used to pay any Extras if unpaid by you as specified in
              section 8. Judgment as to the condition of the property is left to
              the sole discretion of the owner. Your Security Deposit, less any
              applicable claims (see section 8), shall be returned to you within
              fifteen working days. Should the damages exceed the Security
              Deposit amount, you shall pay the additional charges on de-mand.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              10. Policy on Pets
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              The policy on permissibility of pets by the homeowner is clearly
              stated on our online and offline communication against each
              individual property and in the Property Brochure. Even if the
              property is listed as ‘Pet Friendly’, pets are permitted only
              sub-ject to prior written approval from LUX / owner at the time of
              booking the property. Such approval will be clearly indicated on
              the Final Confirmation issued to you. Such permission, if granted,
              shall be specific for a particular pet whose description and
              picture shall be provided to LUX by you in advance before
              permission is granted and such permission shall be subject to
              payment of a Pet Fee and additional Security Deposits as
              determined by the property owner. Failure to obtain prior
              permission, will force either representative of the owner or LUX
              at their sole discretion to deny you check-in at the property or
              ask you to vacate the property without any refund. Pets, when
              permitted by LUX or the owner, must be kept on the property
              strictly as per the rules of the owner and any damages caused to
              the property would be deducted from your Security Deposit.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              10. Policy on Pets
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              The policy on permissibility of pets by the homeowner is clearly
              stated on our online and offline communication against each
              individual property and in the Property Brochure. Even if the
              property is listed as ‘Pet Friendly’, pets are permitted only
              sub-ject to prior written approval from LUX / owner at the time of
              booking the property. Such approval will be clearly indicated on
              the Final Confirmation issued to you. Such permission, if granted,
              shall be specific for a particular pet whose description and
              picture shall be provided to LUX by you in advance before
              permission is granted and such permission shall be subject to
              payment of a Pet Fee and additional Security Deposits as
              determined by the property owner. Failure to obtain prior
              permission, will force either representative of the owner or LUX
              at their sole discretion to deny you check-in at the property or
              ask you to vacate the property without any refund. Pets, when
              permitted by LUX or the owner, must be kept on the property
              strictly as per the rules of the owner and any damages caused to
              the property would be deducted from your Security Deposit.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              11. Complaints
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              Descriptions in the Property Brochure shall be made in good faith.
              However, we shall not be responsible for any modifications made by
              the owners without our knowledge. We also shall not be responsible
              for the failure to supply utilities or other essential services;
              provided, however, that we shall, through our local agents, use
              best efforts to arrange for these problems to be re-solved. LUX
              and the property owners representatives shall retain the right to
              access the villa during your stay to make such re-pairs. LUX and
              the property owner shall also not be liable for failure of
              utilities by the local government services, where such services
              are beyond the control of LUX and the property owner. Such an
              inconvenience shall not entitle you to a refund, but if you must
              vacate the booked property and move to a hotel for the duration of
              repairs, the cost of such hotel shall be borne by Luxunlock and
              the owners if you comply with the provisions of this section 10.
              If you have any problems during your stay, please phone the
              Luxunlock Concierge listed on your Final Confirmation immediately.
              Luxunlock must be notified within 24 hours of the occurrence
              giving rise to the claim and must then be notified by (WA/SMS:
              +919840037483; Email: rentavilla@luxunlock.com) before you vacate
              the booked property. The parties shall mutually select a hotel
              prior to vacating the booked property. Complaints lodged at the
              end of the booking period shall not be considered for purposes of
              reimbursing hotel costs. Should you abandon the property without
              authorization from the owner or local Luxunlock representative,
              you shall lose all rights to a refund. The property shall be kept
              clean throughout the booking period and shall be left clean at the
              end of the booking period. Additional cleaning charges may be
              assessed against you, and Luxunlock may apply your Security
              Deposit in satisfaction of such additional charges if the booked
              property is not left in reasonable condition in the sole opinion
              of the owner or local Luxunlock representative.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              12. Behaviour
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              You shall be responsible for the correct and decent behavior of
              your party. You shall not use the property for any purpose other
              than as a short holiday booking, should not have house parties,
              cause any noise or dissonance with neighbouring residents, play
              loud music, commit any unlawful or immoral activity, bring with
              you or store inflammable, restricted or prohibited materials,
              possess or consume narcotics, or light fireworks on the property.
              Smoking is strictly prohibited indoors within the house, but is
              permitted on the grounds outside the house. Should evidence of
              smoke be detected within the house, you will be charged
              appropriately for the extra cleaning required and may extend to
              asking you to vacate the property. Should you and your party
              behave in such a manner that is not acceptable by reasonable
              standards, the owner or local Luxunlock representative may ask you
              and your party to vacate the booked property without refund.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              13. General Breach
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              Any breach or violation of any of the Booking Conditions by you
              for the booking arranged by LUX, stated herein shall terminate the
              Booking Contract by LUX and you and your party shall be asked to
              vacate the booked property and shall result in forfeiture of
              entire Security Deposit and any other amounts paid by you to LUX
              or the property owner, without recourse whatsoever to any refund
              of amounts paid or deposited by you, notwithstanding whether the
              individual clause or clauses being breached refer to “non
              refundable” nature for the breach or not.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              14. Liability
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              {
                "Your booking contract for using the villa is with the property owner. LUX only acts as an agent for booking the property for yours and your Party’s use from the property owner and collects it's charges for services provided for arranging the property for your use from the property owner. As such, LUX accepts no responsibility for provision of accommodation or quality of accommodation provided or other services provided by the relevant owner. Any issues related to the property faced by you related to the stay should be reported to LUX or the local representative of the owner. In case you are not able to resolve the issue, you may contact LUX. LUX will do its best to facilitate and help resolution of issues faced by you. However, LUX has no control over you and your Party or the property, and hence LUX cannot and does not assure resolution of your grievances. LUX's website, brochures and other publicity material endeavors to show and project true representation of the entire property."
              }
              <br />
              <br />
              {
                "However, information and content therein are provided to LUX by the owner and/or are captured by LUX at the time of service agreement. While LUXhas made all reasonable efforts to verify correctness and currency of such information, LUX can not and shall not be held responsible for any variance thereof with actual. properties arranged by LUX for you, as they are privately owned residential properties for personal use and their furnishings and artifacts may be changed from time to time by the owner depending upon the owners' taste. As a result LUX cannot guarantee presence of particular furnishing, equipment, appliances, artifact, interior appearance etc. that you may have seen on LUX's website, brochures and other publicity material or other endeavors of marketing and publicity. You or any one else shall not be entitled to any claim and shall not claim or receive any damages, compensation, or refunds of any kind whatsoever from LUX and/or owner and neither LUX nor owner shall be responsible to pay the same to anyone including you or your Party on account of such variance or discrepancies."
              }
              <br />
              <br />
              {
                "You and your Party explicitly agree to use the property and all facilities and amenities in and around the property entirely at your own initiative, cost, risk & responsibility. You and your Party accepts to indemnify and hereby indemnifies and shall keep indemnified as well as waives and releases any claims against LUX as well as the owner for any loss / damage of whatsoever nature and magnitude, including but not limited to financial, non financial, Injuries or death that may be sustained by you and/or your Party and/or visitors for whatsoever reasons on, near or adjacent to property, including any common facilities of property and/or using property and/or using facilities, amenities, equipment, appliances etc. provided in or around property. You or your Party or any one else shall not be entitled to any claim and shall not claim or receive any damages, compensation, or refunds of any kind whatsoever from LUX or owner, nor LUX or owner shall be liable to pay the same to anyone including you or your Party, any Visitor or anyone else on any other account."
              }
              <br />
              <br />
              {
                "It is necessary that you understand that the property booked by you does not have any provisions of security of any kind whatsoever nor it is part of LUX's or the owner's responsibility to provide any security arrangements. Only you, your party and your visitors to the property shall be solely and totally responsible, at all times, for safe keeping of yourselves and your belongings of whatsoever kind, type and nature. LUX or the owner shall not be responsible in any way whatsoever for any theft or loss or damage affecting you or your party or visitors themselves, and not be entitled to any claim for damages."
              }
              <br />
              <br />
              {
                "It is also understood that “villa/property” stated here shall mean residential villa/property which is sought by “Renter/Client” and arranged by LUX for use by the renter from its owner. Villa/property shall also be referred to as “villas/properties, etc.” Villa/Property arranged by LUX from its owner is a residential villa/property and is NOT A HOTEL or a GUEST HOUSE, nor is being promoted as a Hotel or Client house stay. It is a standalone private residential villa."
              }
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              15. Possession & Right Of Admission
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              Please note that possession of the property booked by you shall
              always lie with the owner and no one else. It is understood that
              you do not claim to be in possession of the property at any time
              whatsoever. The owner and LUX jointly and severally reserves
              absolute and unconditional right of admission to the property.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              16. Relevance of Headings
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              Heading given above are only for the sake of convenience and shall
              not be construed to carry meaning of clauses stated under them nor
              shall the clauses under the headings be interpreted in relation to
              meanings of headings.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              17. Jurisdiction
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              Irrespective of the location of the property and/or your location
              and/or location of the property owner, it is covenant and
              ac-cepted by you that the registered office of LUX is located in
              Chennai, the Final Confirmation is issued by LUX in Chennai, and
              payments towards villa booking are received in Chennai. Further,
              you unconditionally accept and agree that any and all issues or
              disputes arising out of the booking arranged by LUX or any other
              issue shall be governed by and construed in accordance with laws
              of the Union of India and shall be subject only and only to the
              jurisdiction of the courts of Chennai, without regard to the
              principles of conflicts to law of any other jurisdiction and
              without regards to whether LUX has taken GST registration in
              multiple states or not.
            </div>
          </div>
        </div>
        <MediaListing mediaImages={mediaImages} />
      </>
    </Layout>
  );
};

export default TermsAndConditions;
