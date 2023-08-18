import { formatDate } from '../../utils/formatDate';

const DoctorsAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About
                <span className='text-primaryColor font-bold text-[24px] leading-9'>Dr.Shaun Murphy</span>
            </h3>
            <p className="text__para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda sunt ipsum, quos veniam quia reiciendis vel. Blanditiis incidunt omnis est deserunt similique dicta minima. Aliquid cum adipisci est qui, aspernatur laudantium non ratione! Aperiam quidem tempora esse pariatur! Vitae ex, molestias incidunt nulla at maxime exercitationem repellendus corrupti fugiat necessitatibus?</p>
        </div>


        <div className='mt-12'>
          <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Education
          </h3>

          <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[50px]'>
              <div>
                <span className='text-primaryColor text-[15px] leading-6 font-semibold'>
                    {formatDate("01-09-1999")} -  {formatDate("07-10-2002")}
                </span>
                <p className='text-[15px] leading-6 font-medium text-textColor'>
                    MS in Surgery
                </p>
              </div>
              <p className='text-[14px] leading-5 font-medium text-textColor'>
                 David Geffen School of Medicine at UCLA, Los Angeles.
            </p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[50px]'>
              <div>
                <span className='text-primaryColor text-[15px] leading-6 font-semibold'>
                    {formatDate("11-04-2007")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                    Cardiovascular and Thoracic Surgeon
                </p>
              </div>
              <p className='text-[14px] leading-5 font-medium text-textColor'>
                San jose St.Bonaventure Hospital, New york.
            </p>
            </li>
          </ul>
        </div>



        <div className='mt-12'>
          <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Experience
          </h3>

          <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
              <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formatDate("2-21-2003")} -  {formatDate("07-10-2007")}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                Surgical Resident
              </p>
              <p className='text-[15px] leading-6 font-medium text-textColor'>
               San jose St.Bonaventure Hospital, New york.
              </p>
            </li>
            <li className='p-4 rounded bg-[#fff9ea]'>
              <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formatDate("08-11-2007")} -  {formatDate("07-10-2023")}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                Sr.Surgeon
              </p>
              <p className='text-[15px] leading-6 font-medium text-textColor'>
               San jose St.Bonaventure Hospital, New york.
              </p>
            </li>

          </ul>
        </div>
    </div>
  );
};


export default DoctorsAbout
