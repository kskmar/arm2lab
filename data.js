// Edit the lists below to update people, publications, news and videos.
// The first four portraits follow the order of the supplied images; verify names before public use.
const members = [
  { name: 'Adip Ranjan Das', role: 'PhD student', image: 'images/adip.png' },
  { name: 'Sheena Shabana', role: 'PhD student', image: 'images/sheena.png' },
  { name: 'Christopher Jenner', role: 'PhD student', image: 'images/christopher.png' },
  { name: 'David Neilan', role: 'PhD student', image: 'images/david.png' },
  { name: 'Jacob Mitchell', role: 'PhD student' },
  { name: 'Prab Singh', role: 'PhD student', image: 'images/prab.png' }
];
const papers = [
  { year: 2026, title: 'Cathbot-Pro: A Handheld Robotic Device for Vision-Guided Peripheral Intravenous Catheterization Using NIR Imaging', venue: 'IEEE Transactions on Medical Robotics and Bionics', doi: '10.1109/TMRB.2026.3722331', pdf: 'https://researchportal.hw.ac.uk/files/174371189/Cathbot-Pro_A_Handheld_Robotic_Device_for_Vision-Guided_Peripheral_Intravenous_Catheterization_Using_NIR_Imaging.pdf' },
  { year: 2026, title: 'eGRAP: Graph-Based Adaptive Planning for Dual-arm Robotic Disassembly of Electronic Devices', venue: 'IEEE/ASME International Conference on Advanced Intelligent Mechatronics', doi: '10.1109/AIM65483.2026.11658063', pdf: 'https://researchportal.hw.ac.uk/files/175542002/eGRAP_Graph-Based_AAM.pdf' },
  { year: 2026, title: 'Tracking and inspection of subsea pipelines and cables using underwater vehicles: A comprehensive review', venue: 'Ocean Engineering', doi: '10.1016/j.oceaneng.2026.125884', pdf: 'https://researchportal.hw.ac.uk/files/169725467/1-s2.0-S002980182601718X-main_1_.pdf', shared: true },
  { year: 2026, title: 'Augmented Reality Navigation in Robot-Assisted Surgery', venue: 'Book chapter, Handbook of Robotic and Image-Guided Surgery, ELSEVIER', url: 'https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780443139123000452' },
  { year: 2025, title: 'Finite Element Optimization of a Flexible Fin-Ray-Based Soft Robotic Gripper for Scalable Fruit Harvesting and Manipulation', venue: 'Applied Technologies', doi: '10.1016/j.atech.2025.100899', pdf: 'https://researchportal.hw.ac.uk/files/147936657/1-s2.0-S2772375525001327-main.pdf' },
  { year: 2025, title: 'Stonefish: Supporting Machine Learning Research in Marine Robotics', venue: 'Research paper', url: 'https://arxiv.org/abs/2502.11887', pdf: 'https://researchportal.hw.ac.uk/files/146711343/2502.11887v1.pdf', shared: true },
  { year: 2025, title: 'Vision-based manipulation of transparent plastic bags in industrial setups', venue: 'Frontiers in Robotics and AI', doi: '10.3389/frobt.2025.1506290', pdf: 'https://researchportal.hw.ac.uk/files/146418060/frobt-12-1506290.pdf' },
  { year: 2025, title: 'Toward Sustainable Manufacturing: A Review on Innovations in Robotic Assembly and Disassembly', venue: 'IEEE Access', doi: '10.1109/ACCESS.2025.3576441', pdf: 'https://researchportal.hw.ac.uk/files/151047355/Toward_Sustainable_Manufacturing_A_Review_on_Innovations_in_Robotic_Assembly_and_Disassembly.pdf' },
  { year: 2025, title: 'MAPPS: A Multi-Agent Pick-and-Place System for Efficient Robotic Sorting', venue: 'IEEE International Conference on Imaging Systems and Techniques', doi: '10.1109/IST66504.2025.11268423' },
  { year: 2025, title: 'Towards Autonomous Subsea Longitudinal Object Detection and Tracking Using a Multi-beam Echo-Sounder', venue: 'Towards Autonomous Robotic Systems', doi: '10.1007/978-3-032-01486-3_27', pdf: 'https://researchportal.hw.ac.uk/files/160014320/Taros_paper_favour.pdf', shared: true },
  { year: 2025, title: 'Context-Aware Behavior Learning with Heuristic Motion Memory for Underwater Manipulation', venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems', doi: '10.1109/IROS60139.2025.11247719', pdf: 'https://researchportal.hw.ac.uk/files/163113117/2507.14099v1.pdf', shared: true },
  { year: 2025, title: 'Ultrasound-guided Robotic Aspirator for Autonomous Thoracentesis in Pleural Effusion Treatment', venue: 'IEEE International Conference on Advanced Robotics and Mechatronics', doi: '10.1109/ICARM65671.2025.11293746', pdf: 'https://researchportal.hw.ac.uk/files/149690945/ICARM25_0051_MS.pdf' },
  { year: 2024, title: 'Personal Protective Equipment Detection for Construction Safety Using Deep Learning', venue: 'Robotics', doi: '10.3390/robotics13020031', pdf: 'https://researchportal.hw.ac.uk/files/107561403/robotics-13-00031.pdf' },
  { year: 2024, title: 'Digital Twins Below the Surface: Applications and Challenges in Underwater Robotics', venue: 'OCEANS 2024', doi: '10.1109/OCEANS51537.2024.10682270', pdf: 'https://arxiv.org/pdf/2402.07556', shared: true },
  { year: 2024, title: 'Enhancing Image Quality Assessment Using CNN-Based Edge Detection', venue: 'OCEANS 2024', doi: '10.1109/OCEANS51537.2024.10682130' },
  { year: 2024, title: 'Sensing Technologies for Guidance during Needle-based Interventions', venue: 'IEEE Transactions on Instrumentation and Measurement', doi: '10.1109/TIM.2024.3441017', pdf: 'https://researchportal.hw.ac.uk/files/140267337/Sensing_Technologies_for_Guidance_during_Needle-based_Interventions.pdf' },
  { year: 2023, title: 'Augmented Reality Navigation in Robot-Assisted Surgery with a Teleoperated Robotic Endoscope', venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems', doi: '10.1109/IROS55552.2023.10342282' },
  { year: 2023, title: 'Dual Robot Collaborative System for Autonomous Venous Access Based on Ultrasound and Bioimpedance Sensing Technology', venue: 'IEEE International Conference on Robotics and Automation', doi: '10.1109/ICRA48891.2023.10160848' },
  { year: 2023, title: 'Engineering and Development of a Tissue Model for the Evaluation of Microneedle Penetration Ability, Drug Diffusion, Photothermal Activity, and Ultrasound Imaging: A Promising Surrogate to Ex Vivo and In Vivo Tissues', venue: 'Advanced Materials', doi: '10.1002/adma.202210034', pdf: 'https://researchportal.hw.ac.uk/files/113138798/Advanced_Materials_-_2023_-_Makvandi_-_Engineering_and_Development_of_a_Tissue_Model_for_the_Evaluation_of_Microneedle.pdf' },
  { year: 2023, title: 'Robotic Devices for Assisted and Autonomous Intravenous Access', venue: 'IEEE Transactions on Medical Robotics and Bionics', doi: '10.1109/TMRB.2023.3269844', pdf: 'https://researchportal.hw.ac.uk/files/112871030/Robotic_Devices_for_Assisted_and_Autonomous_Intravenous_Access.pdf' },
  { year: 2022, title: 'Force-prediction Scheme for Precise Grip-lifting Movements', venue: 'IEEE International Conference on Advanced Robotics and Applications', doi: '10.1109/ICARA55094.2022.9738532' },
  { year: 2021, title: 'Robotic Waste Sorting Technology: Toward a Vision-based Categorization System for Industrial Robotic Sorting', venue: 'IEEE Robotics & Automation Magazine', doi: '10.1109/MRA.2021.3066040' },
  { year: 2021, title: 'Vision-Guided Autonomous Robotic Electrical Bio-Impedance Scanning System for Abnormal Tissue Detection', venue: 'IEEE Transactions on Medical Robotics and Bionics', doi: '10.1109/TMRB.2021.3098938' },
  { year: 2020, title: 'On the Use of Vacuum Technology for Applied Robotic Systems', venue: 'IEEE International Conference on Mechatronics and Robotics Engineering', doi: '10.1109/ICMRE49073.2020.9065189' },
  { year: 2020, title: 'Robotic Pick-and-Toss Facilitates Urban Waste Sorting', venue: 'IEEE International Conference on Automation Science and Engineering', doi: '10.1109/CASE48305.2020.9216746' },
  { year: 2020, title: 'Speed Adaptation in Learning from Demonstration through Latent Space Formulation', venue: 'Robotica', doi: '10.1017/S0263574719001449' },
  { year: 2020, title: 'Time-Aware Multi-Agent Symbiosis', venue: 'Frontiers in Robotics and AI', doi: '10.3389/frobt.2020.503452' },
  { year: 2019, title: 'Learning spatio-temporal characteristics of human motions through observation', venue: 'Towards Autonomous Robotic Systems', doi: '10.1007/978-3-030-00232-9_9' },
  { year: 2018, title: 'Nonlinear State Estimation for Humanoid Robot Walking', venue: 'IEEE Robotics and Automation Letters', doi: '10.1109/LRA.2018.2852788' },
  { year: 2016, title: 'A methodological framework for robotic reproduction of observed human actions: Formulation using latent space representation', venue: 'IEEE-RAS International Conference on Humanoid Robots', doi: '10.1109/HUMANOIDS.2016.7803331' },
  { year: 2016, title: 'Learning from demonstration facilitates human-robot collaborative task execution', venue: 'ACM/IEEE International Conference on Human-Robot Interaction', doi: '10.1109/HRI.2016.7451734' }
];
const news = [
  { date: 'Aug 2026', title: 'Cathbot-Pro published in IEEE Transactions on Medical Robotics and Bionics', url: 'https://researchportal.hw.ac.uk/en/persons/maria-koskinopoulou/' },
  { date: 'Aug 2026', title: 'eGRAP presented at IEEE/ASME AIM 2026', url: 'https://researchportal.hw.ac.uk/en/persons/maria-koskinopoulou/' }
];
const videos = [
  { title: 'Autonomous Intravenous Access', label: 'Medical robotics', url: 'https://sites.google.com/view/mariakoskinopoulou' },
  { title: 'Robotic Waste Sorting', label: 'Manipulation', url: 'https://sites.google.com/view/mariakoskinopoulou' },
  { title: 'Time-aware Multi-agent Symbiosis', label: 'Multi-agent systems', url: 'https://sites.google.com/view/mariakoskinopoulou' }
];
