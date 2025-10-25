// Comprehensive Maharashtra Engineering Colleges Database
const maharashtraColleges = [
    {
        name: "Indian Institute of Technology Bombay",
        location: "Powai, Mumbai",
        city: "Mumbai",
        type: "Government",
        established: 1958,
        affiliation: "Autonomous (Institute of National Importance)",
        ranking: "NIRF Rank 3 (2023)",
        rating: 4.9,
        phone: "+91-22-2572-2545",
        email: "admissions@iitb.ac.in",
        website: "https://www.iitb.ac.in",
        cetCode: "IIT001",
        branches: {
            "Computer Science & Engineering": 120,
            "Mechanical Engineering": 100,
            "Electrical Engineering": 90,
            "Civil Engineering": 80,
            "Chemical Engineering": 70,
            "Aerospace Engineering": 60,
            "Metallurgical Engineering": 50,
            "Engineering Physics": 40
        },
        fees: "₹2.5L per year",
        placement: {
            average: "₹19.2 LPA",
            highest: "₹1.8 Crore",
            rate: "98%"
        },
        facilities: ["World-class Labs", "Research Centers", "International Programs", "Alumni Network"]
    },
    {
        name: "College of Engineering Pune (COEP)",
        location: "Shivajinagar, Pune",
        city: "Pune",
        type: "Government",
        established: 1854,
        affiliation: "Savitribai Phule Pune University",
        ranking: "NIRF Rank 45 (2023)",
        rating: 4.7,
        phone: "+91-20-2550-7001",
        email: "info@coep.ac.in",
        website: "https://www.coeptech.ac.in/",
        cetCode: "COEP01",
        branches: {
            "Computer Engineering": 180,
            "Information Technology": 120,
            "Mechanical Engineering": 150,
            "Electrical Engineering": 120,
            "Civil Engineering": 120,
            "Electronics & Telecommunication": 120,
            "Production Engineering": 60,
            "Instrumentation & Control": 60
        },
        fees: "₹85K per year",
        placement: {
            average: "₹8.5 LPA",
            highest: "₹45 LPA",
            rate: "95%"
        },
        facilities: ["Advanced Labs", "Innovation Center", "Sports Complex", "Alumni Network"]
    },
    {
        name: "Veermata Jijabai Technological Institute (VJTI)",
        location: "Matunga, Mumbai",
        city: "Mumbai",
        type: "Government",
        established: 1887,
        affiliation: "University of Mumbai",
        ranking: "NIRF Rank 52 (2023)",
        rating: 4.6,
        phone: "+91-22-2419-5200",
        email: "principal@vjti.ac.in",
        website: "https://www.vjti.ac.in",
        cetCode: "VJTI01",
        branches: {
            "Computer Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 120,
            "Electrical Engineering": 90,
            "Electronics Engineering": 120,
            "Civil Engineering": 60,
            "Production Engineering": 60,
            "Textile Technology": 30
        },
        fees: "₹75K per year",
        placement: {
            average: "₹7.8 LPA",
            highest: "₹42 LPA",
            rate: "92%"
        },
        facilities: ["State-of-art Labs", "Research Centers", "Industry Partnerships", "Hostels"]
    },
    {
        name: "Government College of Engineering, Nagpur",
        location: "Nagpur",
        city: "Nagpur",
        type: "Government",
        established: 1951,
        affiliation: "Rashtrasant Tukadoji Maharaj Nagpur University",
        ranking: "NIRF Rank 89 (2023)",
        rating: 4.2,
        phone: "+91-712-280-1200",
        email: "principal@recnagpur.ac.in",
        website: "https://www.gcoen.ac.in",
        cetCode: "GCEN01",
        branches: {
            "Computer Science & Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 120,
            "Electrical Engineering": 90,
            "Civil Engineering": 120,
            "Electronics & Communication": 90,
            "Mining Engineering": 60,
            "Metallurgical Engineering": 30
        },
        fees: "₹80K per year",
        placement: {
            average: "₹6.8 LPA",
            highest: "₹28 LPA",
            rate: "82%"
        },
        facilities: ["Engineering Labs", "Central Library", "Hostels", "Training & Placement"]
    },
    {
        name: "Pune Institute of Computer Technology (PICT)",
        location: "Dhankawadi, Pune",
        city: "Pune",
        type: "Private",
        established: 1983,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Top 100 Engineering Colleges",
        rating: 4.5,
        phone: "+91-20-2437-1101",
        email: "admissions@pict.edu",
        website: "https://www.pict.edu",
        cetCode: "PICT01",
        branches: {
            "Computer Engineering": 240,
            "Information Technology": 180,
            "Electronics & Telecommunication": 120,
            "Mechanical Engineering": 60
        },
        fees: "₹1.8L per year",
        placement: {
            average: "₹9.2 LPA",
            highest: "₹52 LPA",
            rate: "94%"
        },
        facilities: ["Modern Labs", "Innovation Hub", "Industry Collaboration", "International Exchange"]
    },
    {
        name: "Maharashtra Institute of Technology (MIT), Pune",
        location: "Kothrud, Pune",
        city: "Pune",
        type: "Private",
        established: 1983,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Top 50 Private Engineering Colleges",
        rating: 4.6,
        phone: "+91-20-2543-3000",
        email: "admissions@mitpune.edu.in",
        website: "https://www.mitpune.edu.in",
        cetCode: "MIT001",
        branches: {
            "Computer Science & Engineering": 240,
            "Information Technology": 120,
            "Mechanical Engineering": 120,
            "Electrical Engineering": 60,
            "Electronics & Telecommunication": 120,
            "Civil Engineering": 60,
            "Chemical Engineering": 60,
            "Automobile Engineering": 60
        },
        fees: "₹2.8L per year",
        placement: {
            average: "₹8.8 LPA",
            highest: "₹42 LPA",
            rate: "92%"
        },
        facilities: ["Advanced Labs", "Innovation Hub", "Industry Collaboration", "International Exchange"]
    },
    {
        name: "Vishwakarma Institute of Technology (VIT), Pune",
        location: "Bibwewadi, Pune",
        city: "Pune",
        type: "Private",
        established: 1983,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Top 75 Engineering Colleges",
        rating: 4.4,
        phone: "+91-20-2428-5000",
        email: "info@vit.edu",
        website: "https://www.vit.edu",
        cetCode: "VIT001",
        branches: {
            "Computer Engineering": 180,
            "Information Technology": 120,
            "Mechanical Engineering": 120,
            "Electronics & Telecommunication": 120,
            "Civil Engineering": 60,
            "Production Engineering": 60
        },
        fees: "₹2.2L per year",
        placement: {
            average: "₹7.5 LPA",
            highest: "₹35 LPA",
            rate: "88%"
        },
        facilities: ["Modern Infrastructure", "Research Labs", "Industry Partnerships", "Hostels"]
    },
    
    {
        name: "K. J. Somaiya College of Engineering",
        location: "Vidyavihar, Mumbai",
        city: "Mumbai",
        type: "Private",
        established: 1983,
        affiliation: "University of Mumbai",
        ranking: "Top 100 Engineering Colleges",
        rating: 4.4,
        phone: "+91-22-6728-3000",
        email: "kjsce@somaiya.edu",
        website: "https://kjsce.somaiya.edu/en",
        cetCode: "KJSCE1",
        branches: {
            "Computer Engineering": 120,
            "Information Technology": 60,
            "Electronics Engineering": 120,
            "Mechanical Engineering": 60,
            "Electrical Engineering": 60,
            "Biomedical Engineering": 30
        },
        fees: "₹1.8L per year",
        placement: {
            average: "₹7.2 LPA",
            highest: "₹32 LPA",
            rate: "88%"
        },
        facilities: ["Innovation Labs", "Incubation Center", "Sports Complex", "Cultural Activities"]
    },
    {
        name: "Sardar Patel College of Engineering (SPCE)",
        location: "Andheri, Mumbai",
        city: "Mumbai",
        type: "Private",
        established: 1962,
        affiliation: "University of Mumbai",
        ranking: "Top 150 Engineering Colleges",
        rating: 4.2,
        phone: "+91-22-2624-2651",
        email: "info@spce.ac.in",
        website: "https://www.spce.ac.in",
        cetCode: "SPCE01",
        branches: {
            "Computer Engineering": 180,
            "Information Technology": 120,
            "Electronics & Telecommunication": 120,
            "Mechanical Engineering": 60
        },
        fees: "₹1.6L per year",
        placement: {
            average: "₹6.8 LPA",
            highest: "₹28 LPA",
            rate: "85%"
        },
        facilities: ["Computer Labs", "Workshop", "Placement Cell", "Student Activities"]
    },
    {
        name: "Walchand College of Engineering, Sangli",
        location: "Vishrambag, Sangli",
        city: "Sangli",
        type: "Private",
        established: 1947,
        affiliation: "Shivaji University",
        ranking: "NIRF Rank 78 (2023)",
        rating: 4.3,
        phone: "+91-233-230-3433",
        email: "info@walchandsangli.ac.in",
        website: "https://www.walchandsangli.ac.in",
        cetCode: "WCE001",
        branches: {
            "Computer Science & Engineering": 120,
            "Mechanical Engineering": 120,
            "Electrical Engineering": 60,
            "Electronics & Telecommunication": 120,
            "Civil Engineering": 60,
            "Information Technology": 60
        },
        fees: "₹1.4L per year",
        placement: {
            average: "₹6.5 LPA",
            highest: "₹25 LPA",
            rate: "83%"
        },
        facilities: ["Engineering Labs", "Central Library", "Sports Ground", "Canteen"]
    },
    {
        name: "Government College of Engineering, Aurangabad",
        location: "Aurangabad",
        city: "Aurangabad",
        type: "Government",
        established: 1960,
        affiliation: "Dr. Babasaheb Ambedkar Marathwada University",
        ranking: "State Rank 15",
        rating: 4.0,
        phone: "+91-240-240-1200",
        email: "principal@geca.ac.in",
        website: "https://www.geca.ac.in",
        cetCode: "GECA01",
        branches: {
            "Computer Science & Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 120,
            "Electrical Engineering": 60,
            "Civil Engineering": 120,
            "Electronics & Telecommunication": 60
        },
        fees: "₹75K per year",
        placement: {
            average: "₹5.5 LPA",
            highest: "₹20 LPA",
            rate: "78%"
        },
        facilities: ["Engineering Labs", "Central Library", "Sports Ground", "Canteen"]
    },
    {
        name: "Sinhgad College of Engineering",
        location: "Vadgaon, Pune",
        city: "Pune",
        type: "Private",
        established: 1996,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Top 150 Engineering Colleges",
        rating: 4.1,
        phone: "+91-20-2428-1000",
        email: "scoe@sinhgad.edu",
        website: "https://www.sinhgad.edu",
        cetCode: "SCOE01",
        branches: {
            "Computer Engineering": 180,
            "Information Technology": 120,
            "Mechanical Engineering": 120,
            "Electrical Engineering": 60,
            "Electronics & Telecommunication": 120,
            "Civil Engineering": 60
        },
        fees: "₹1.5L per year",
        placement: {
            average: "₹6.2 LPA",
            highest: "₹22 LPA",
            rate: "80%"
        },
        facilities: ["Modern Labs", "Library", "Placement Cell", "Student Development"]
    },
    {
        name: "D.Y. Patil College of Engineering",
        location: "Akurdi, Pune",
        city: "Pune",
        type: "Private",
        established: 1984,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Top 100 Engineering Colleges",
        rating: 4.3,
        phone: "+91-20-2740-2000",
        email: "dypcoe@dypatil.edu",
        website: "https://www.dypatiluniversitypune.edu.in/",
        cetCode: "DYPC01",
        branches: {
            "Computer Engineering": 180,
            "Information Technology": 120,
            "Mechanical Engineering": 120,
            "Electronics & Telecommunication": 120,
            "Civil Engineering": 90,
            "Electrical Engineering": 60
        },
        fees: "₹2.2L per year",
        placement: {
            average: "₹6.2 LPA",
            highest: "₹25 LPA",
            rate: "85%"
        },
        facilities: ["Modern Infrastructure", "Research Labs", "Industry Partnerships", "Hostels"]
    },
    {
        name: "Ramrao Adik Institute of Technology",
        location: "Nerul, Navi Mumbai",
        city: "Mumbai",
        type: "Private",
        established: 1983,
        affiliation: "University of Mumbai",
        ranking: "Top 100 Engineering Colleges",
        rating: 4.2,
        phone: "+91-22-2770-5000",
        email: "rait@dypatil.edu",
        website: "https://www.rait.ac.in",
        cetCode: "RAIT01",
        branches: {
            "Computer Engineering": 120,
            "Information Technology": 60,
            "Electronics & Telecommunication": 120,
            "Mechanical Engineering": 60,
            "Electrical Engineering": 60
        },
        fees: "₹1.9L per year",
        placement: {
            average: "₹6.8 LPA",
            highest: "₹30 LPA",
            rate: "86%"
        },
        facilities: ["Computer Centers", "Workshop", "Auditorium", "Sports Facilities"]
    },
    {
        name: "Thadomal Shahani Engineering College",
        location: "Bandra, Mumbai",
        city: "Mumbai",
        type: "Private",
        established: 1983,
        affiliation: "University of Mumbai",
        ranking: "Top 200 Engineering Colleges",
        rating: 3.9,
        phone: "+91-22-2640-4832",
        email: "info@tsec.edu",
        website: "https://www.tsec.edu",
        cetCode: "TSEC01",
        branches: {
            "Computer Engineering": 120,
            "Information Technology": 60,
            "Electronics & Telecommunication": 120,
            "Mechanical Engineering": 60
        },
        fees: "₹1.4L per year",
        placement: {
            average: "₹5.8 LPA",
            highest: "₹18 LPA",
            rate: "79%"
        },
        facilities: ["Computer Centers", "Workshop", "Auditorium", "Sports Facilities"]
    },
    {
        name: "Sandip Institute of Technology and Research Centre",
        location: "Nashik",
        city: "Nashik",
        type: "Private",
        established: 2008,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Emerging Engineering College",
        rating: 3.5,
        phone: "+91-253-230-3000",
        email: "info@sitrc.org",
        website: "https://sitrc.sandipfoundation.org/",
        cetCode: "SITRC1",
        branches: {
            "Computer Engineering": 180,
            "Information Technology": 120,
            "Mechanical Engineering": 120,
            "Electronics & Telecommunication": 120,
            "Civil Engineering": 60,
            "Electrical Engineering": 60
        },
        fees: "₹1.2L per year",
        placement: {
            average: "₹4.0 LPA",
            highest: "₹12 LPA",
            rate: "68%"
        },
        facilities: ["Modern Labs", "Library", "Sports Complex", "Hostels"]
    },
    {
        name: "Pravara Rural Engineering College",
        location: "Loni, Ahmednagar",
        city: "Ahmednagar",
        type: "Private",
        established: 1999,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Top 250 Engineering Colleges",
        rating: 3.4,
        phone: "+91-2422-273-273",
        email: "info@prec.ac.in",
        website: "https://www.pravaraengg.org.in/",
        cetCode: "PREC01",
        branches: {
            "Computer Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 90,
            "Electrical Engineering": 60,
            "Civil Engineering": 90,
            "Electronics & Telecommunication": 60
        },
        fees: "₹1.0L per year",
        placement: {
            average: "₹3.8 LPA",
            highest: "₹10 LPA",
            rate: "65%"
        },
        facilities: ["Rural Engineering Labs", "Library", "Hostels", "Agriculture Research"]
    },
    {
        name: "Rajarambapu Institute of Technology",
        location: "Rajaramnagar, Sangli",
        city: "Sangli",
        type: "Private",
        established: 1983,
        affiliation: "Shivaji University",
        ranking: "Top 150 Engineering Colleges",
        rating: 4.0,
        phone: "+91-234-280-2100",
        email: "info@ritindia.edu",
        website: "https://www.ritindia.edu/ritwebsite/website/index.php",
        cetCode: "RIT001",
        branches: {
            "Computer Science & Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 120,
            "Electrical Engineering": 60,
            "Civil Engineering": 60,
            "Electronics & Telecommunication": 90
        },
        fees: "₹1.3L per year",
        placement: {
            average: "₹5.5 LPA",
            highest: "₹18 LPA",
            rate: "78%"
        },
        facilities: ["Advanced Labs", "Research Centers", "Industry Partnerships", "Hostels"]
    },
    {
        name: "Shivaji University College of Engineering",
        location: "Kolhapur",
        city: "Kolhapur",
        type: "Government",
        established: 1983,
        affiliation: "Shivaji University",
        ranking: "State Rank 18",
        rating: 3.9,
        phone: "+91-231-260-3000",
        email: "principal@suce.ac.in",
        website: "https://www.suce.in/",
        cetCode: "SUCE01",
        branches: {
            "Computer Science & Engineering": 60,
            "Mechanical Engineering": 60,
            "Electrical Engineering": 60,
            "Civil Engineering": 60,
            "Electronics & Telecommunication": 60
        },
        fees: "₹75K per year",
        placement: {
            average: "₹5.2 LPA",
            highest: "₹20 LPA",
            rate: "77%"
        },
        facilities: ["Government Labs", "Central Library", "Sports Ground", "Hostels"]
    },
    {
        name: "Finolex Academy of Management and Technology",
        location: "Ratnagiri",
        city: "Ratnagiri",
        type: "Private",
        established: 1998,
        affiliation: "University of Mumbai",
        ranking: "Regional Engineering College",
        rating: 3.3,
        phone: "+91-2355-252-525",
        email: "info@famat.ac.in",
        website: "https://www.famat.com/",
        cetCode: "FAMAT1",
        branches: {
            "Computer Engineering": 60,
            "Information Technology": 30,
            "Mechanical Engineering": 60,
            "Electrical Engineering": 30,
            "Electronics & Telecommunication": 60
        },
        fees: "₹95K per year",
        placement: {
            average: "₹3.5 LPA",
            highest: "₹8 LPA",
            rate: "62%"
        },
        facilities: ["Coastal Engineering Labs", "Library", "Hostels", "Marine Research"]
    },
    {
        name: "Yeshwantrao Chavan College of Engineering",
        location: "Nagpur",
        city: "Nagpur",
        type: "Private",
        established: 1984,
        affiliation: "Rashtrasant Tukadoji Maharaj Nagpur University",
        ranking: "Top 200 Engineering Colleges",
        rating: 3.7,
        phone: "+91-712-280-5000",
        email: "info@ycce.edu",
        website: "https://www.ycce.edu",
        cetCode: "YCCE01",
        branches: {
            "Computer Science & Engineering": 180,
            "Information Technology": 120,
            "Mechanical Engineering": 120,
            "Electrical Engineering": 90,
            "Electronics & Telecommunication": 120,
            "Civil Engineering": 60
        },
        fees: "₹1.4L per year",
        placement: {
            average: "₹5.0 LPA",
            highest: "₹16 LPA",
            rate: "74%"
        },
        facilities: ["Computer Centers", "Research Labs", "Library", "Sports Complex"]
    },
    {
        name: "Yeshwantrao Chavan College of Engineering",
        location: "Nagpur",
        city: "Nagpur",
        type: "Private",
        established: 1984,
        affiliation: "Rashtrasant Tukadoji Maharaj Nagpur University",
        ranking: "Top 200 Engineering Colleges",
        rating: 3.7,
        phone: "+91-712-280-5000",
        email: "info@ycce.edu",
        website: "https://www.ycce.edu",
        cetCode: "YCCE01",
        branches: {
            "Computer Science & Engineering": 180,
            "Information Technology": 120,
            "Mechanical Engineering": 120,
            "Electrical Engineering": 90,
            "Electronics & Telecommunication": 120,
            "Civil Engineering": 60
        },
        fees: "₹1.4L per year",
        placement: {
            average: "₹5.0 LPA",
            highest: "₹16 LPA",
            rate: "74%"
        },
        facilities: ["Computer Centers", "Research Labs", "Library", "Sports Complex"]
    },
    {
        name: "G.H. Raisoni College of Engineering",
        location: "Nagpur",
        city: "Nagpur",
        type: "Private",
        established: 1996,
        affiliation: "Rashtrasant Tukadoji Maharaj Nagpur University",
        ranking: "Top 150 Engineering Colleges",
        rating: 3.8,
        phone: "+91-712-223-3000",
        email: "info@ghrce.raisoni.net",
        website: "https://raisoni.net/",
        cetCode: "GHRCE1",
        branches: {
            "Computer Science & Engineering": 240,
            "Information Technology": 180,
            "Mechanical Engineering": 120,
            "Electrical Engineering": 90,
            "Electronics & Telecommunication": 120,
            "Civil Engineering": 90
        },
        fees: "₹1.6L per year",
        placement: {
            average: "₹5.5 LPA",
            highest: "₹22 LPA",
            rate: "80%"
        },
        facilities: ["Innovation Labs", "Incubation Center", "Industry Partnerships", "Hostels"]
    },
    {
        name: "Jawaharlal Nehru Engineering College",
        location: "Aurangabad",
        city: "Aurangabad",
        type: "Private",
        established: 1983,
        affiliation: "Dr. Babasaheb Ambedkar Marathwada University",
        ranking: "Top 200 Engineering Colleges",
        rating: 3.6,
        phone: "+91-240-248-2000",
        email: "info@jnec.ac.in",
        website: "https://www.jnec.ac.in",
        cetCode: "JNEC01",
        branches: {
            "Computer Science & Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 90,
            "Electrical Engineering": 60,
            "Electronics & Telecommunication": 90,
            "Civil Engineering": 60
        },
        fees: "₹1.2L per year",
        placement: {
            average: "₹4.2 LPA",
            highest: "₹14 LPA",
            rate: "71%"
        },
        facilities: ["Engineering Labs", "Library", "Placement Cell", "Sports Facilities"]
    },
    {
        name: "Smt. Kashibai Navale College of Engineering",
        location: "Vadgaon, Pune",
        city: "Pune",
        type: "Private",
        established: 1994,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Top 200 Engineering Colleges",
        rating: 3.7,
        phone: "+91-20-2692-3000",
        email: "info@skncoepune.ac.in",
        website: "https://raisoni.net/",
        cetCode: "SKNCE1",
        branches: {
            "Computer Engineering": 180,
            "Information Technology": 120,
            "Mechanical Engineering": 120,
            "Electronics & Telecommunication": 120,
            "Civil Engineering": 90,
            "Electrical Engineering": 60
        },
        fees: "₹1.5L per year",
        placement: {
            average: "₹5.8 LPA",
            highest: "₹19 LPA",
            rate: "79%"
        },
        facilities: ["Modern Labs", "Research Centers", "Library", "Sports Complex"]
    },
    {
        name: "Karmayogi Institute of Technology",
        location: "Shelve, Solapur",
        city: "Pandharpur",
        type: "Private",
        established: 2008,
        affiliation: "Dr. Babasaheb Ambedkar Technological University",
        ranking: "Top 200 Engineering Colleges",
        rating: 3.5,
        phone: "+9102186250300",
        email: "kpcmailbox@rediffmail.com",
        website: "karmayogicollege.ac.in/#",
        cetCode: "KIT",
        branches: {
            "Computer Engineering": 60,
            "Mechanical Engineering": 60,
            "Electronics & Telecommunication": 60,
            "Civil Engineering": 60,
            
        },
        fees: "₹95K per year",
        placement: {
            average: "₹5.8 LPA",
            highest: "₹19 LPA",
            rate: "80%"
        },
        facilities: ["Modern Labs", " Best Campus", "Library", "Sports Complex"]
    },
    {
        name: "Indira College of Engineering and Management",
        location: "Parandwadi, Pune",
        city: "Pune",
        type: "Private",
        established: 2007,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Emerging Engineering College",
        rating: 3.4,
        phone: "+91-20-2692-5000",
        email: "info@indiraicem.ac.in",
        website: "https://www.indiraicem.ac.in",
        cetCode: "ICEM01",
        branches: {
            "Computer Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 90,
            "Electronics & Telecommunication": 90,
            "Civil Engineering": 60
        },
        fees: "₹1.1L per year",
        placement: {
            average: "₹4.0 LPA",
            highest: "₹12 LPA",
            rate: "67%"
        },
        facilities: ["Computer Labs", "Workshop", "Library", "Canteen"]
    },
    {
        name: "Amrutvahini College of Engineering",
        location: "Sangamner, Ahmednagar",
        city: "Ahmednagar",
        type: "Private",
        established: 1996,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Regional Engineering College",
        rating: 3.3,
        phone: "+91-2425-222-000",
        email: "info@avcoe.org",
        website: "https://www.avcoe.org",
        cetCode: "AVCOE1",
        branches: {
            "Computer Engineering": 60,
            "Information Technology": 30,
            "Mechanical Engineering": 60,
            "Electrical Engineering": 30,
            "Electronics & Telecommunication": 60,
            "Civil Engineering": 60
        },
        fees: "₹90K per year",
        placement: {
            average: "₹3.2 LPA",
            highest: "₹8 LPA",
            rate: "60%"
        },
        facilities: ["Basic Labs", "Library", "Hostels", "Agriculture Research"]
    },
    {
        name: "Matoshri College of Engineering and Research Centre",
        location: "Nashik",
        city: "Nashik",
        type: "Private",
        established: 2001,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Regional Engineering College",
        rating: 3.2,
        phone: "+91-253-230-5000",
        email: "info@matoshri.edu.in",
        website: "https://www.matoshri.edu.in",
        cetCode: "MCERC1",
        branches: {
            "Computer Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 90,
            "Electronics & Telecommunication": 90,
            "Civil Engineering": 60,
            "Electrical Engineering": 30
        },
        fees: "₹1.0L per year",
        placement: {
            average: "₹3.5 LPA",
            highest: "₹9 LPA",
            rate: "63%"
        },
        facilities: ["Computer Labs", "Workshop", "Library", "Sports Ground"]
    },
    {
        name: "Sinhgad Academy of Engineering",
        location: "Kondhwa, Pune",
        city: "Pune",
        type: "Private",
        established: 2009,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Emerging Engineering College",
        rating: 3.5,
        phone: "+91-20-2692-8000",
        email: "info@sae.sinhgad.edu",
        website: "https://sinhgad.edu/",
        cetCode: "SAE001",
        branches: {
            "Computer Engineering": 180,
            "Information Technology": 120,
            "Mechanical Engineering": 120,
            "Electronics & Telecommunication": 120,
            "Civil Engineering": 60
        },
        fees: "₹1.4L per year",
        placement: {
            average: "₹4.8 LPA",
            highest: "₹15 LPA",
            rate: "72%"
        },
        facilities: ["Modern Infrastructure", "Labs", "Library", "Sports Complex"]
    },
    {
        name: "Trinity College of Engineering and Research",
        location: "Kondhwa, Pune",
        city: "Pune",
        type: "Private",
        established: 2008,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Regional Engineering College",
        rating: 3.1,
        phone: "+91-20-2692-7000",
        email: "info@trinityengineering.org",
        website: "http://www.trinityengineers.com/",
        cetCode: "TCER01",
        branches: {
            "Computer Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 90,
            "Electronics & Telecommunication": 90,
            "Civil Engineering": 60
        },
        fees: "₹95K per year",
        placement: {
            average: "₹3.0 LPA",
            highest: "₹7 LPA",
            rate: "58%"
        },
        facilities: ["Basic Labs", "Library", "Canteen", "Transport"]
    },
    {
        name: "Sanjivani College of Engineering",
        location: "Kopargaon, Ahmednagar",
        city: "Ahmednagar",
        type: "Private",
        established: 1983,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Top 200 Engineering Colleges",
        rating: 3.6,
        phone: "+91-2423-226-000",
        email: "info@sanjivani.org.in",
        website: "https://www.sanjivani.org.in",
        cetCode: "SCOE02",
        branches: {
            "Computer Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 120,
            "Electrical Engineering": 60,
            "Electronics & Telecommunication": 90,
            "Civil Engineering": 60
        },
        fees: "₹1.1L per year",
        placement: {
            average: "₹4.5 LPA",
            highest: "₹13 LPA",
            rate: "70%"
        },
        facilities: ["Engineering Labs", "Research Centers", "Library", "Hostels"]
    },
    {
        name: "Sinhgad Institute of Technology",
        location: "Lonavala, Pune",
        city: "Pune",
        type: "Private",
        established: 2002,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Regional Engineering College",
        rating: 3.4,
        phone: "+91-2114-304-000",
        email: "info@sit.sinhgad.edu",
        website: "https://sinhgad.edu/",
        cetCode: "SIT001",
        branches: {
            "Computer Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 90,
            "Electronics & Telecommunication": 90,
            "Civil Engineering": 60
        },
        fees: "₹1.2L per year",
        placement: {
            average: "₹4.0 LPA",
            highest: "₹11 LPA",
            rate: "66%"
        },
        facilities: ["Hill Station Campus", "Labs", "Library", "Adventure Sports"]
    },
    {
        name: "Bharati Vidyapeeth College of Engineering, Pune",
        location: "Dhankawadi, Pune",
        city: "Pune",
        type: "Private",
        established: 1983,
        affiliation: "Bharati Vidyapeeth University",
        ranking: "Top 150 Engineering Colleges",
        rating: 3.9,
        phone: "+91-20-2437-2000",
        email: "info@bvcoep.edu.in",
        website: "https://bvcoe.bharatividyapeeth.edu/",
        cetCode: "BVCEP1",
        branches: {
            "Computer Engineering": 180,
            "Information Technology": 120,
            "Mechanical Engineering": 120,
            "Electronics & Telecommunication": 120,
            "Civil Engineering": 90,
            "Electrical Engineering": 60
        },
        fees: "₹1.6L per year",
        placement: {
            average: "₹5.5 LPA",
            highest: "₹18 LPA",
            rate: "78%"
        },
        facilities: ["University Campus", "Research Centers", "Library", "Sports Complex"]
    },
    {
        name: "Modern Education Society's College of Engineering",
        location: "Wadia, Pune",
        city: "Pune",
        type: "Private",
        established: 1962,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Top 200 Engineering Colleges",
        rating: 3.7,
        phone: "+91-20-2565-3000",
        email: "info@mescoepune.org",
        website: "https://mescoe.mespune.org/",
        cetCode: "MESCOE",
        branches: {
            "Computer Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 90,
            "Electronics & Telecommunication": 90,
            "Civil Engineering": 60,
            "Electrical Engineering": 30
        },
        fees: "₹1.3L per year",
        placement: {
            average: "₹5.0 LPA",
            highest: "₹16 LPA",
            rate: "74%"
        },
        facilities: ["Heritage Campus", "Labs", "Library", "Alumni Network"]
    },
    {
        name: "Symbiosis Institute of Technology",
        location: "Lavale, Pune",
        city: "Pune",
        type: "Private",
        established: 2008,
        affiliation: "Symbiosis International University",
        ranking: "Top 100 Private Engineering Colleges",
        rating: 4.2,
        phone: "+91-20-2880-4000",
        email: "info@sitpune.edu.in",
        website: "https://www.sitpune.edu.in",
        cetCode: "SIT002",
        branches: {
            "Computer Science & Engineering": 180,
            "Information Technology": 120,
            "Electronics & Telecommunication": 120,
            "Mechanical Engineering": 90,
            "Civil Engineering": 60
        },
        fees: "₹3.5L per year",
        placement: {
            average: "₹8.2 LPA",
            highest: "₹35 LPA",
            rate: "90%"
        },
        facilities: ["International Campus", "Research Centers", "Innovation Labs", "Global Programs"]
    },
    {
        name: "Fergusson College of Engineering",
        location: "Pune",
        city: "Pune",
        type: "Private",
        established: 2009,
        affiliation: "Savitribai Phule Pune University",
        ranking: "Emerging Engineering College",
        rating: 3.3,
        phone: "+91-20-2565-4000",
        email: "info@fergussontech.ac.in",
        website: "https://forsale.godaddy.com/forsale/fergusontech.com?utm_source=TDFS_BINNS2&utm_medium=parkedpages&utm_campaign=x_corp_tdfs-binns2_base&traffic_type=TDFS_BINNS2&traffic_i",
        cetCode: "FCE001",
        branches: {
            "Computer Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 90,
            "Electronics & Telecommunication": 90
        },
        fees: "₹1.1L per year",
        placement: {
            average: "₹3.8 LPA",
            highest: "₹10 LPA",
            rate: "64%"
        },
        facilities: ["Heritage Institution", "Labs", "Library", "Cultural Activities"]
    },
    {
        name: "Government College of Engineering, Jalgaon",
        location: "Jalgaon",
        city: "Jalgaon",
        type: "Government",
        established: 1983,
        affiliation: "Dr. Babasaheb Ambedkar Technological University",
        ranking: "State Rank 22",
        rating: 3.8,
        phone: "+91-257-225-8000",
        email: "principal@gcejalgaon.ac.in",
        website: "https://www.gcejalgaon.ac.in",
        cetCode: "GCEJ01",
        branches: {
            "Computer Science & Engineering": 60,
            "Mechanical Engineering": 60,
            "Electrical Engineering": 60,
            "Civil Engineering": 60,
            "Electronics & Telecommunication": 60
        },
        fees: "₹72K per year",
        placement: {
            average: "₹4.8 LPA",
            highest: "₹16 LPA",
            rate: "74%"
        },
        facilities: ["Government Labs", "Central Library", "Hostels", "Sports Ground"]
    },
    {
        name: "Government College of Engineering, Amravati",
        location: "Amravati",
        city: "Amravati",
        type: "Government",
        established: 1994,
        affiliation: "Dr. Babasaheb Ambedkar Technological University",
        ranking: "State Rank 25",
        rating: 3.7,
        phone: "+91-721-266-2000",
        email: "principal@gcoea.ac.in",
        website: "https://www.gcoea.ac.in",
        cetCode: "GCEA01",
        branches: {
            "Computer Science & Engineering": 60,
            "Information Technology": 30,
            "Mechanical Engineering": 60,
            "Electrical Engineering": 60,
            "Civil Engineering": 60,
            "Electronics & Telecommunication": 60
        },
        fees: "₹70K per year",
        placement: {
            average: "₹4.5 LPA",
            highest: "₹14 LPA",
            rate: "72%"
        },
        facilities: ["Engineering Labs", "Library", "Hostels", "Research Centers"]
    },
    {
        name: "Priyadarshini College of Engineering",
        location: "Nagpur",
        city: "Nagpur",
        type: "Private",
        established: 1994,
        affiliation: "Dr. Babasaheb Ambedkar Technological University",
        ranking: "Top 200 Engineering Colleges",
        rating: 3.5,
        phone: "+91-712-280-6000",
        email: "info@pce.ac.in",
        website: "https://www.pce.ac.in",
        cetCode: "PCE002",
        branches: {
            "Computer Science & Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 90,
            "Electrical Engineering": 60,
            "Electronics & Telecommunication": 90,
            "Civil Engineering": 60
        },
        fees: "₹1.3L per year",
        placement: {
            average: "₹4.2 LPA",
            highest: "₹13 LPA",
            rate: "69%"
        },
        facilities: ["Computer Labs", "Workshop", "Library", "Placement Cell"]
    },
    {
        name: "Shri Ramdeobaba College of Engineering and Management",
        location: "Nagpur",
        city: "Nagpur",
        type: "Private",
        established: 1984,
        affiliation: "Dr. Babasaheb Ambedkar Technological University",
        ranking: "Top 150 Engineering Colleges",
        rating: 4.0,
        phone: "+91-712-280-7000",
        email: "info@rknec.edu",
        website: "https://www.rknec.edu",
        cetCode: "RKNEC1",
        branches: {
            "Computer Science & Engineering": 180,
            "Information Technology": 120,
            "Mechanical Engineering": 120,
            "Electrical Engineering": 90,
            "Electronics & Telecommunication": 120,
            "Civil Engineering": 90
        },
        fees: "₹1.7L per year",
        placement: {
            average: "₹6.2 LPA",
            highest: "₹24 LPA",
            rate: "84%"
        },
        facilities: ["Advanced Labs", "Research Centers", "Innovation Hub", "Industry Partnerships"]
    },
    {
        name: "Datta Meghe Institute of Engineering, Technology & Research",
        location: "Wardha",
        city: "Wardha",
        type: "Private",
        established: 2007,
        affiliation: "Dr. Babasaheb Ambedkar Technological University",
        ranking: "Emerging Engineering College",
        rating: 3.4,
        phone: "+91-7152-287-000",
        email: "info@dmietr.ac.in",
        website: "https://www.dmietr.ac.in",
        cetCode: "DMIET1",
        branches: {
            "Computer Science & Engineering": 120,
            "Information Technology": 60,
            "Mechanical Engineering": 90,
            "Electrical Engineering": 60,
            "Electronics & Telecommunication": 90,
            "Civil Engineering": 60
        },
        fees: "₹1.1L per year",
        placement: {
            average: "₹3.8 LPA",
            highest: "₹11 LPA",
            rate: "66%"
        },
        facilities: ["Medical College Campus", "Research Labs", "Library", "Hostels"]
    }
];

// DOM Elements
const collegesGrid = document.getElementById('collegesGrid');
const infoPanel = document.getElementById('infoPanel');
const searchInput = document.getElementById('searchInput');
const cityFilter = document.getElementById('cityFilter');
const typeFilter = document.getElementById('typeFilter');
const universityFilter = document.getElementById('universityFilter');
const totalCollegesSpan = document.getElementById('totalColleges');

let filteredColleges = [...maharashtraColleges];

// Favorites functionality
let favorites = JSON.parse(localStorage.getItem('favoriteColleges')) || [];

function toggleFavorite(collegeName, event) {
    event.stopPropagation();
    const index = favorites.indexOf(collegeName);
    if (index > -1) {
        favorites.splice(index, 1);
        event.target.classList.remove('active');
    } else {
        favorites.push(collegeName);
        event.target.classList.add('active');
    }
    localStorage.setItem('favoriteColleges', JSON.stringify(favorites));
}

function isFavorite(collegeName) {
    return favorites.includes(collegeName);
}

function showFavorites() {
    const favoriteColleges = maharashtraColleges.filter(college => isFavorite(college.name));
    filteredColleges = favoriteColleges;
    renderColleges();
    updateStats();
    dashboardDropdown.classList.remove('show');
    dashboardIcon.classList.remove('active');
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '') + '☆'.repeat(emptyStars);
}

// Create college card
function createCollegeCard(college) {
    const card = document.createElement('div');
    card.className = 'college-card';
    
    const branchesHtml = Object.entries(college.branches).map(([branch, intake]) => 
        `<div class="branch-item">
            <div class="branch-name">${branch}</div>
            <div class="branch-intake">${intake} seats</div>
        </div>`
    ).join('');
    
    const favoriteClass = isFavorite(college.name) ? 'active' : '';
    
    card.innerHTML = `
        <button class="favorite-btn ${favoriteClass}" onclick="toggleFavorite('${college.name}', event)">♥</button>
        <div class="college-header">
            <div>
                <div class="college-name" onclick="openCollegeDetails('${college.name}', event)">${college.name}</div>
                <div class="college-location">📍 ${college.location}</div>
            </div>
            <div class="college-type">${college.type}</div>
        </div>
        
        <div class="college-details">
            <div class="detail-item">
                <span class="detail-label">Established:</span> ${college.established}
            </div>
            <div class="detail-item">
                <span class="detail-label">Affiliation:</span> ${college.affiliation}
            </div>
            <div class="detail-item">
                <span class="detail-label">Ranking:</span> ${college.ranking}
            </div>
            <div class="detail-item">
                <span class="detail-label">Fees:</span> ${college.fees}
            </div>
        </div>
        
        <div class="branches-section">
            <div class="branches-title">Engineering Branches & Intake</div>
            <div class="branches-grid">
                ${branchesHtml}
            </div>
        </div>
        
        <div class="rating-section">
            <span class="stars">${generateStars(college.rating)}</span>
            <span class="rating-text">${college.rating}/5.0</span>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('favorite-btn')) {
            showCollegeDetails(college);
        }
    });
    
    card.addEventListener('dblclick', () => {
        localStorage.setItem('selectedCollege', JSON.stringify(college));
        window.location.href = 'college-details.html';
    });
    
    return card;
}

// Open college details in new page
function openCollegeDetails(collegeName, event) {
    event.stopPropagation();
    
    let collegeId;
    if (collegeName.includes('IIT Bombay')) collegeId = 'iitbombay';
    else if (collegeName.includes('COEP')) collegeId = 'coep';
    else if (collegeName.includes('VJTI')) collegeId = 'vjti';
    else collegeId = collegeName.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 10);
    
    window.open(`college-details.html?id=${collegeId}`, '_blank');
}

// Show college details in info panel
function showCollegeDetails(college) {
    const placementInfo = `
        <div class="college-info-section">
            <h3>📊 Placement Statistics</h3>
            <ul>
                <li><strong>Average Package:</strong> ${college.placement.average}</li>
                <li><strong>Highest Package:</strong> ${college.placement.highest}</li>
                <li><strong>Placement Rate:</strong> ${college.placement.rate}</li>
            </ul>
        </div>
    `;
    
    const facilitiesInfo = `
        <div class="college-info-section">
            <h3>🏛️ Facilities</h3>
            <ul>
                ${college.facilities.map(facility => `<li>${facility}</li>`).join('')}
            </ul>
        </div>
    `;
    
    const contactInfo = `
        <div class="college-info-section">
            <h3>📞 Contact Information</h3>
            <ul>
                <li><strong>Phone:</strong> ${college.phone}</li>
                <li><strong>Email:</strong> ${college.email}</li>
                <li><strong>Website:</strong> <a href="${college.website}" target="_blank">${college.website}</a></li>
                <li><strong>CET Code:</strong> ${college.cetCode}</li>
            </ul>
        </div>
    `;
    
    infoPanel.innerHTML = `
        <h2>${college.name}</h2>
        ${placementInfo}
        ${facilitiesInfo}
        ${contactInfo}
    `;
}

// Filter colleges
function filterColleges() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCity = cityFilter.value;
    const selectedType = typeFilter.value;
    const selectedUniversity = universityFilter.value;
    
    filteredColleges = maharashtraColleges.filter(college => {
        const matchesSearch = college.name.toLowerCase().includes(searchTerm) ||
                            college.location.toLowerCase().includes(searchTerm) ||
                            Object.keys(college.branches).some(branch => 
                                branch.toLowerCase().includes(searchTerm));
        
        const matchesCity = selectedCity === '' || college.city === selectedCity;
        const matchesType = selectedType === '' || college.type === selectedType;
        const matchesUniversity = selectedUniversity === '' || 
                                college.affiliation.includes(selectedUniversity) ||
                                (selectedUniversity === 'Autonomous' && college.affiliation.includes('Autonomous'));
        
        return matchesSearch && matchesCity && matchesType && matchesUniversity;
    });
    
    renderColleges();
    updateStats();
}

// Render colleges
function renderColleges() {
    collegesGrid.innerHTML = '';
    
    filteredColleges.forEach(college => {
        const collegeCard = createCollegeCard(college);
        collegesGrid.appendChild(collegeCard);
    });
}

// Update statistics
function updateStats() {
    totalCollegesSpan.textContent = filteredColleges.length;
}

// Event listeners
searchInput.addEventListener('input', filterColleges);
cityFilter.addEventListener('change', filterColleges);
typeFilter.addEventListener('change', filterColleges);
universityFilter.addEventListener('change', filterColleges);

// Dashboard functionality
const dashboardIcon = document.getElementById('dashboardIcon');
const dashboardDropdown = document.getElementById('dashboardDropdown');

dashboardIcon.addEventListener('click', () => {
    dashboardIcon.classList.toggle('active');
    dashboardDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!dashboardIcon.contains(e.target) && !dashboardDropdown.contains(e.target)) {
        dashboardIcon.classList.remove('active');
        dashboardDropdown.classList.remove('show');
    }
});

// Dashboard menu functions
function goHome() {
    // Reload the page or navigate to home
    window.location.reload();
    dashboardDropdown.classList.remove('show');
    dashboardIcon.classList.remove('active');
}

function studentLogin() {
    // Show login modal
    document.getElementById('loginModal').style.display = 'block';
    dashboardDropdown.classList.remove('show');
    dashboardIcon.classList.remove('active');
}

// Login Modal functionality
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');

// Demo credentials for testing
const validCredentials = {
    'student@college.edu': 'student123',
    'admin@college.edu': 'admin123',
    'test@gmail.com': 'password'
};

// Close modal when clicking X
closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Check credentials
    if (validCredentials[email] && validCredentials[email] === password) {
        // Success - save login info and close modal
        localStorage.setItem('loggedInUser', email);
        localStorage.setItem('loginTime', new Date().toISOString());
        
        // Show success message
        alert('Login Successful! Welcome ' + email);
        
        // Clear form and close modal
        loginForm.reset();
        loginModal.style.display = 'none';
        
        // Update UI to show logged in state
        updateLoginState();
    } else {
        // Show error message
        alert('Invalid email or password. Please try again.\n\nDemo credentials:\n- student@college.edu / student123\n- admin@college.edu / admin123\n- test@gmail.com / password');
    }
});

// Update UI based on login state
function updateLoginState() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        // User is logged in - could update dashboard menu here
        console.log('User logged in:', loggedInUser);
    }
}

// Check login state on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLoginState();
});

// Create account modal functionality
const createAccountModal = document.getElementById('createAccountModal');
const closeCreateModal = document.getElementById('closeCreateModal');
const createAccountForm = document.getElementById('createAccountForm');

// Create account link functionality
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('createAccountLink').addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'none';
        createAccountModal.style.display = 'block';
    });
});

// Close create account modal
closeCreateModal.addEventListener('click', () => {
    createAccountModal.style.display = 'none';
});

// Close create account modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === createAccountModal) {
        createAccountModal.style.display = 'none';
    }
});

// Handle create account form submission
createAccountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const newEmail = document.getElementById('newEmail').value;
    const phone = document.getElementById('phone').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validate passwords match
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }
    
    // Validate password length
    if (newPassword.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }
    
    // Success - save account info
    const accountData = {
        fullName: fullName,
        email: newEmail,
        phone: phone,
        password: newPassword,
        createdAt: new Date().toISOString()
    };
    
    localStorage.setItem('newAccount_' + newEmail, JSON.stringify(accountData));
    
    alert('Account created successfully! You can now login with your credentials.');
    
    // Clear form and close modal
    createAccountForm.reset();
    createAccountModal.style.display = 'none';
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderColleges();
    updateStats();
});