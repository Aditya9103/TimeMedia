import mongoose from 'mongoose';
import connectDB from './config/db.js';
import AwardCategory from './models/AwardCategory.js';
import AwardEvent from './models/AwardEvent.js';

const data = [
  {
    category: "Global Education Awards",
    events: [
      "Global Education Awards, 2026 & Summit",
      "Global Education Awards, 2025 & Summit",
      "Global Education Awards, 2023 & Summit",
      "Global Education Awards 2022 & Summit",
      "Global Education Awards, 2020 & Summit",
      "Global Education Awards, 2019 & Summit",
      "Global Education Awards, 2018 & Summit",
      "Global Education Awards, 2017 & Summit",
      "Global Education Awards, 2016 & Summit",
      "Global Education Awards, 2015 & Summit",
      "Global Education Awards, 2014 & Summit",
      "Global Education Awards, 2013 & Summit"
    ]
  },
  {
    category: "Global Healthcare Awards",
    events: [
      "Global Healthcare Awards, 2026",
      "Global Healthcare Awards, 2025",
      "Global Healthcare Awards 2024",
      "Global Healthcare Awards 2023",
      "Global Healthcare Awards 2022",
      "Global Healthcare Awards 2019",
      "Global Healthcare Awards 2018",
      "Global Healthcare Awards 2017",
      "Global Healthcare Awards 2016",
      "Global Healthcare Awards 2015",
      "Global Healthcare Awards 2014",
      "Global Healthcare Awards 2013"
    ]
  },
  {
    category: "Global Icon Awards",
    events: [
      "Global Icon Awards, 2026",
      "Global Icon Awards, 2025",
      "Global Icon Awards, 2024",
      "Global Icon Awards, 2023",
      "Global Icon Awards, 2022",
      "Global Icon Awards, 2019",
      "GLOBAL BUSINESS LEADERSHIP AWARDS 2018",
      "GLOBAL BUSINESS LEADERSHIP AWARDS 2015",
      "GLOBAL BUSINESS LEADERSHIP AWARDS 2014",
      "GLOBAL BUSINESS LEADERSHIP AWARDS 2013"
    ]
  },
  {
    category: "India Excellence Awards",
    events: [
      "India Excellence Awards 2026 & Summit",
      "India Excellence Awards 2025 & Summit",
      "India Excellence Awards, 2024 & Summit",
      "India Excellence Awards, 2023 & Summit"
    ]
  },
  {
    category: "National Dental Awards",
    events: [
      "National Dental Excellence Awards,2026 & Summit",
      "National Dental Excellence Awards,2025 & Summit",
      "Dental Excellence Awards,2018",
      "Dental Excellence Awards,2017",
      "Dental Excellence Awards,2016",
      "Dental Excellence Awards,2015",
      "Dental Excellence Awards,2014"
    ]
  },
  {
    category: "Digital Bharat Summit",
    events: []
  },
  {
    category: "International Awards",
    events: [
      "Asia Alliance Awards, 2026 & Summit",
      "Global Leadership Awards 2025, Malaysia",
      "United State Program 2026",
      "United State Program 2025",
      "UK Program 2026"
    ]
  }
];

const seedData = async () => {
  try {
    await connectDB();

    for (let i = 0; i < data.length; i++) {
      const catData = data[i];
      let category = await AwardCategory.findOne({ name: catData.category });
      if (!category) {
        category = await AwardCategory.create({ name: catData.category, order: i + 1, isActive: true });
        console.log(`Created Category: ${category.name}`);
      }

      for (const eventName of catData.events) {
        const existingEvent = await AwardEvent.findOne({ title: eventName });
        if (!existingEvent) {
          await AwardEvent.create({
            category: category._id,
            title: eventName,
            status: 'past',
            eventDate: new Date('2023-01-01'), // dummy date
          });
          console.log(`  -> Created Event: ${eventName}`);
        }
      }
    }

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();
