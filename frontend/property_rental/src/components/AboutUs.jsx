import React from 'react';
import Footer from './footer';



const AboutUs = () => {
  return (

    <>
    
    
    <section id='hero'>
     
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row gap-0 mt-32' >
        
        <div className='flex flex-col mb-32 space-y-12 ml-28 md:w-1/2 gap-1'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            Bring everyone together to build better products
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue  md:text-left'>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          
        </div>
       
        <div className='md:w-1/2 '>
          <img src="./images/about.png" alt='' />
        </div>
      </div>
    </section>



    <section id='features'>
      {/* Flex Container */}
      <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
        {/* What's Different */}
        <div className='flex flex-col mb-32 space-y-12 ml-28 md:w-1/2 gap-1'>
          <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
            What's different about Manage?
          </h2>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* Numbered List */}
        <div className='flex flex-col space-y-8 md:w-1/2'>
          {/* List Item 1 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-black rounded-full md:py-1 bg-brightRed'>
                <i class="fa fa-circle" aria-hidden="true"></i>
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Track company-wide progress
              </h3>
              <p className='text-darkGrayishBlue'>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          {/* List Item 2 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-black rounded-full md:py-1 bg-brightRed'>
                <i class="fa fa-circle" aria-hidden="true"></i>
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Advanced built-in reports
              </h3>
              <p className='text-darkGrayishBlue'>
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>

          {/* List Item 3 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-black rounded-full md:py-1 bg-brightRed'>
                <i class="fa fa-circle" aria-hidden="true"></i>
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Everything you need in one place
              </h3>
              <p className='text-darkGrayishBlue'>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


<section id='testimonials'>
      
     <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
       
         <h2 className='text-4xl font-bold text-center'>
           Our Team
         </h2>
       
         <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
       
           <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
             <img src="./images/adi.jpg" className='w-20 -mt-14 h-20' alt='' />
             <h5 className='text-lg font-bold'>Aditya Sharma</h5>
             <p className='text-sm text-darkGrayishBlue'>
               “Manage has supercharged our team's workflow. The ability to
               maintain visibility on larger milestones at all times keeps
               everyone motivated.”
             </p>
           </div>

          
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src="./images/anushka.jpg" className='w-20 -mt-14 h-20' alt='' />
            <h5 className='text-lg font-bold'>Anushka Mishra</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

         
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src="./images/devansh.png" className='w-20 -mt-14 h-20' alt='' />
            <h5 className='text-lg font-bold'> Devansh Agrawal</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src="./images/rudrika.png" className='w-20 -mt-14 h-20' alt='' />
            <h5 className='text-lg font-bold'>Rudrika Raghav</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src="./images/vaishnavi.jpg" className='w-20 -mt-14 h-20' alt='' />
            <h5 className='text-lg font-bold'>Vaishnavi Sharma</h5>
            <p className='text-sm text-darkGrayishBlue'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam odio maiores rerum exercitationem dignissimos, numquam vero! Modi corrupti dicta sequi.
            </p>
          </div>
        </div>
        
        <div className='my-16'>
          
        </div>
      </div>
    </section>
 
    </>
    // 
   
  );
};

export default AboutUs;
