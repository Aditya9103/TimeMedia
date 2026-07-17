import { motion } from 'framer-motion';

const ChiefGuestsGrid = () => {
  const guests = [
    {
      name: 'Virender Sehwag',
      designation: 'An Indian cricket commentator and former cricketer',
      image: '/guest/guest1vs.jpeg'
    },
    {
      name: 'Sunil Manohar Gavaskar',
      designation: 'An Indian cricket commentator and former cricketer',
      image: '/guest/guest2sg.jpeg'
    },
    {
      name: 'Dr. Najma A. Heptulla',
      designation: "Hon'ble Governer, Manipur; Chancellor, Jamia Millia Islamia",
      image: '/guest/guest7nh.jpeg'
    },
    {
      name: 'Dr. Girdhar J. Gyani',
      designation: 'Director General, Association of Health Providers (India)',
      image: '/guest/guest35Gjg.jpg'
    },
    {
      name: 'Mr. Brad Hogg',
      designation: 'Former Australian Cricketer',
      image: '/guest/guest6bh.jpeg'
    },
    {
      name: 'Shri Ashwini Kumar Choubey',
      designation: "Hon'ble Minister of State for Health and Family Welfare",
      image: '/guest/guest3ac.jpeg'
    },
    {
      name: 'Dr. Abhishek Singhvi',
      designation: 'MP, Eminient Jurist, National Spokesperson, INC Former Additional Solicitor General of India',
      image: '/guest/guest34Absi.jpg'
    },
    {
      name: 'Smt. Sudha Yadav',
      designation: 'Former Member, Parliament; National secretary, BJP',
      image: '/guest/guest33suY.jpg'
    },
    {
      name: 'Dr. Anil Jain',
      designation: 'National General Secretary BJP',
      image: '/guest/guest32DrAnilJain.jpg'
    },
    {
      name: 'Smt. Chandresh Kumari Katoch',
      designation: 'Hon’ble Union Minister of Culture, Government of India',
      image: '/guest/guest31chandreshkumarikatoch.jpg'
    },
    {
      name: 'Shri Chetan Chauhan',
      designation: "Hon'ble Minister of Youth & Sports of Uttar Pradesh",
      image: '/guest/guest29shrichetanchauan.jpg'
    },
    {
      name: 'Shri Anil K. Shastri',
      designation: 'Son of Lal Bahadur Shastri; Former Ministry of Finance, Govt. of India.',
      image: '/guest/guest30Anksh.jpg'
    },
    {
      name: 'Shri Anand Kumar',
      designation: 'Founder & Director, Super30',
      image: '/guest/guest8ak.jpeg'
    },
    {
      name: 'Shri G.V.L Narsimha Rao',
      designation: 'Natioanal Spokes Person, Bharatiya Janta Party (BJP)',
      image: '/guest/guest5nr.jpeg'
    },
    {
      name: 'Shri Maninder Singh',
      designation: 'Former Cricketer, Indian Cricket Team',
      image: '/guest/guest28mns.jpg'
    },
    {
      name: 'Shri Kirti Jha Azad',
      designation: 'Hon’ble Member of Parliament Former Indian Cricketer',
      image: '/guest/guest27kirtiazad.jpg'
    },
    {
      name: 'Shri Amar Singh',
      designation: "Hon'ble Member of Parliament (Rajya Sabha)",
      image: '/guest/guest9as.jpeg'
    },
    {
      name: 'Dr. K.K Aggarwal',
      designation: 'Trustee and President of Heart Care Foundation of India',
      image: '/guest/guest25kka.jpg'
    },
    {
      name: 'Dr. Anil Kohli',
      designation: 'Senior Consultant Endodontist & Implantologist; Former President, Dental Council of India',
      image: '/guest/guest24ankkh.jpg'
    },
    {
      name: 'Ms. Arti Mehra',
      designation: 'CEO, NABH; Former Mayor, Municipal Corporation of Delhi',
      image: '/guest/guest23Am.jpg'
    },
    {
      name: 'Dr. Akhil K. Sangal',
      designation: 'CEO & Director, Indian confidential for Healthcare Accreditation',
      image: '/guest/guest22drakhilksangal.jpg'
    },
    {
      name: 'Dr. Ajay Kumar',
      designation: 'Former President, Indian Medical Association',
      image: '/guest/guest21Dr.ajaykumar.jpg'
    },
    {
      name: 'Dr. Yoganand Shashtri',
      designation: 'Former Reader, Shaheed Bhagat Singh College, Delhi',
      image: '/guest/guest4ys.jpeg'
    },
    {
      name: 'Prof. D. K. Vaid',
      designation: 'Ex- Professor Dean & Head, NCERT.',
      image: '/guest/guest20DKVaid.jpg'
    },
    {
      name: 'Shri Somnath Bhart',
      designation: 'Politician, Former Minister of Law, Tourism, Administrative Reforms, Art & Culture, Government of Delhi',
      image: '/guest/guest19somnath.jpg'
    },
    {
      name: 'Dr. Jitendra Kumar Singh',
      designation: 'President, Cancer Care India; Former National Vice- President, India Medical Association',
      image: '/guest/guest18jks.jpg'
    },
    {
      name: 'Mr. S.K Naik',
      designation: 'Secretary, Department of Health Ministry of Health Government of India',
      image: '/guest/guest17skn.jpg'
    },
    {
      name: 'Dr. O.P. Kharbanda',
      designation: 'Head, Center for Dental Education and Research, AIIMS',
      image: '/guest/guest16drOpKharbanda.jpg'
    },
    {
      name: 'Shri Sandeep Patil',
      designation: 'Former Indian Cricketer & Chief of the BCCI Selection Committee',
      image: '/guest/guest15Sp.jpg'
    },
    {
      name: 'Dr. R.K. Bali',
      designation: 'Padma Shri Winner & Former President, Dental Council of India',
      image: '/guest/guest14drRkBali.jpg'
    },
    {
      name: 'Dr. Raj Aggarwal',
      designation: 'Director, AIMA-CME; Ex- Director of IILM Academy',
      image: '/guest/guest13drrajaggarwal.jpg'
    },
    {
      name: 'Shri Vijay Satti',
      designation: 'Office In-charge Committee Member, BJP',
      image: '/guest/guest12vijaysatti-1.png'
    },
    {
      name: 'Ms. Mugdha Godse',
      designation: 'National Spokes Person, BJP',
      image: '/guest/guest10mugdagodse.jpg'
    },
    {
      name: 'Pawan Negi',
      designation: 'Indian Cricketer',
      image: '/guest/guest11pn.jpg'
    }
  ];

  return (
    <div className="py-16">
      <div className="border border-blue-500 rounded-3xl p-8 md:p-12 shadow-sm bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 gap-y-16">
          {guests.map((guest, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }} // Mini-stagger for performance
              className="flex flex-col items-center text-center cursor-pointer group/card w-full"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden shadow-2xl transition-all duration-500 group-hover/card:shadow-cyan-500/30 group-hover/card:-translate-y-2 max-w-full mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <img
                  src={guest.image}
                  alt={guest.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform scale-[1.35] group-hover/card:scale-[1.45] transition-transform duration-700 relative z-0"
                />
              </div>
              <h3 className="font-bold text-xl text-slate-800 mb-2 group-hover/card:text-[#15b7b9] transition-colors">{guest.name}</h3>
              <p className="text-sm font-medium text-slate-500 px-4 max-w-sm mx-auto">{guest.designation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChiefGuestsGrid;
