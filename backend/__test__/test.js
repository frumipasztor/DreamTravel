const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

it("Testing to see if Jest works", () => {
  expect(1).toBe(1);
});

it("gets the test endpoint", async () => {
  const response = await request.get("/");

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("pass!");
});

it("testing the pdf endpoint", async () => {
  const response = await request.get("/pdf");

  // 301 = pernamently redirect code
  expect(response.status).toBe(301);
});

describe("/api endpoints testing", () => {
  const About = require("../models/about.model");
  const Blog = require("../models/blog.model");
  const Contact = require("../models/contact.model");
  const History = require("../models/history.model");
  const Invoice = require("../models/invoice.model");
  const Customer = require("../models/customer.model");
  const Travel = require("../models/travel.model");
  const User = require("../models/user.model");
  const Sights = require("../models/sights.model");

  require("dotenv").config();

  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), {
      useNewUrlParser: true,
      dbName: "verifyMASTER",
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  });

  afterEach(async () => {
    await About.deleteMany();
    await Blog.deleteMany();
    await Contact.deleteMany();
    await History.deleteMany();
    await Invoice.deleteMany();
    await Customer.deleteMany();
    await Travel.deleteMany();
    await User.deleteMany();
    await Sights.deleteMany();
  });

  afterAll(async () => {
    await mongoose.connection.close();
    await mongoose.disconnect();
    if (mongoServer) {
      await mongoServer.stop();
    }
  });

  it("testing the /api/sights endpoint ", async () => {
    let sights = [
      {
        title: "Hawaii",
        firstptitle: "Hawaii",
        firstp: "Hawaii",
        secondptitle: "Hawaii",
        secondp: "Hawaii",
        thirdptitle: "Kiscica",
        thirdp: "kiscica",
        fourthptitle: "hawaii",
        fourthp: "Hawaii",
        img: "hawaii2",
      },
    ];

    await Sights.insertMany(sights);

    const response = await request.get("/api/sights");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("title", "Hawaii");
  });

  it("testing the /api/sights endpoint without mongopush ", async () => {
    let sights = [
      {
        title: "Hawaii",
        firstptitle: "Hawaii",
        firstp: "Hawaii",
        secondptitle: "Hawaii",
        secondp: "Hawaii",
        thirdptitle: "Kiscica",
        thirdp: "kiscica",
        fourthptitle: "hawaii",
        fourthp: "Hawaii",
        img: "hawaii2",
      },
    ];

 //   await Sights.insertMany(sights);

    const response = await request.get("/api/sights");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(null);
  });

  it("testing the /api/sights endpoint error ", async () => {
    let sights = [
      {
        title: "Hawaii",
        firstptitle: "Hawaii",
        firstp: "Hawaii",
        secondptitle: "Hawaii",
        secondp: "Hawaii",
        thirdptitle: "Kiscica",
        thirdp: "kiscica",
        fourthptitle: "hawaii",
        fourthp: "Hawaii",
        img: "hawaii2",
      },
    ];

    await Sights.insertMany(sights);

    const response = await request.get("/api/sights");

    expect(response.status).not.toBe(404);
    expect(response.body).not.toHaveProperty("title", "kiscica");
  });

  it("testing the /api/history endpoint", async () => {
    let history = [
      {
        title: "history",
        img: "hawaii2",
        firstp: "loremipsum",
        secondp: "hey",
        thirdp: "kiscica",
        fourthp: "Hawaii",
      },
    ];
    await History.insertMany(history);
    const response = await request.get("/api/history");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("title", "history");
  });

  it("testing the /api/history endpoint without mongopush", async () => {
    let history = [
      {
        title: "history",
        img: "hawaii2",
        firstp: "loremipsum",
        secondp: "hey",
        thirdp: "kiscica",
        fourthp: "Hawaii",
      },
    ];
   // await History.insertMany(history);
    const response = await request.get("/api/history");
    expect(response.status).toBe(200);
    expect(response.body).toBeNull();
  });

  it("testing the /api/history endpoint error", async () => {
    let history = [
      {
        title: "history",
        img: "hawaii2",
        firstp: "loremipsum",
        secondp: "hey",
        thirdp: "kiscica",
        fourthp: "Hawaii",
      },
    ];
    await History.insertMany(history);
    const response = await request.get("/api/history");
    expect(response.status).not.toBe(404);
    expect(response.body).not.toHaveProperty("title", "kiscica");
  });

  it("testing the /api/blog endpoint", async () => {
    let blog = [
      {
        title: "history",
        path: "/history",
        img: "hawaii1",
        summary: "loremipsum",
      },
      {
        title: "sights",
        path: "/sights",
        img: "hawaii2",
        summary: "kiscica",
      },
    ];

    await Blog.insertMany(blog);
    const response = await request.get("/api/blog");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty("title", "history");
    expect(response.body[1]).toHaveProperty("title", "sights");
  });

  it("testing the /api/blog endpoint error", async () => {
    let blog = [
      {
        title: "history",
        path: "/history",
        img: "hawaii1",
        summary: "loremipsum",
      },
      {
        title: "sights",
        path: "/sights",
        img: "hawaii2",
        summary: "kiscica",
      },
    ];

    await Blog.insertMany(blog);
    const response = await request.get("/api/blog");
    expect(response.status).not.toBe(404);
    expect(response.body.length).not.toBe(20);
    expect(response.body[0]).not.toHaveProperty("title", "sights");
    expect(response.body[1]).not.toHaveProperty("title", "history");
  });

  it("testing the /api/about endpoint", async () => {
    let about = [
      {
        pharagraph1: "lorem",
        pharagraph2: "ipsum",
      },
    ];

    await About.insertMany(about);
    const response = await request.get("/api/about");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("pharagraph1", "lorem");
  });

  it("testing the /api/about endpoint error", async () => {
    let about = [
      {
        pharagraph1: "lorem",
        pharagraph2: "ipsum",
      },
    ];

    await About.insertMany(about);
    const response = await request.get("/api/about");
    expect(response.status).not.toBe(404);
    expect(response.body).not.toHaveProperty("pharagraph1", "ipsum");
  });

  it("testing the /api/contact endpoint", async () => {
    let contact = [
      {
        tel: "+36 70 / 523 - 8742",
        open: "Monday to Friday, 8:00am – 6:00pm",
        email: "dreamtravel@creatememories.com",
      },
    ];

    await Contact.insertMany(contact);
    const response = await request.get("/api/contact");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(
      "email",
      "dreamtravel@creatememories.com"
    );
  });

  
  it("testing the /api/contact endpoint error", async () => {
    let contact = [
      {
        tel: "+36 70 / 523 - 8742",
        open: "Monday to Friday, 8:00am – 6:00pm",
        email: "dreamtravel@creatememories.com",
      },
    ];

    await Contact.insertMany(contact);
    const response = await request.get("/api/contact");
    expect(response.status).not.toBe(404);
    expect(response.body).not.toHaveProperty(
      "email",
      "kiscica@creatememories.com"
    );
  });

  it("testing the /api/traveldetails endpoint", async () => {
    let travel = [
      {
        from: "Budapest",
        to: "Hawaii",
        limit: 40,
        current: 11,
        duration_from: "10.10.2021",
        duration_to: "10.24.2021",
        summary:
          "Integer finibus nisi erat. Sed tempus dui non nunc molestie, eu aliqua...",
      },
    ];

    await Travel.insertMany(travel);
    const response = await request.get("/api/traveldetails");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("from", "Budapest");
  });


  it("testing the /api/traveldetails endpoint error", async () => {
    let travel = [
      {
        from: "Budapest",
        to: "Hawaii",
        limit: 40,
        current: 11,
        duration_from: "10.10.2021",
        duration_to: "10.24.2021",
        summary:
          "Integer finibus nisi erat. Sed tempus dui non nunc molestie, eu aliqua...",
      },
    ];

    await Travel.insertMany(travel);
    const response = await request.get("/api/traveldetails");
    expect(response.status).not.toBe(400);
    expect(response.body).not.toHaveProperty("from", "Hawaii");
  });


  it("testing the /api/travellimit endpoint", async () => {
    let travel = [
      {
        from: "Budapest",
        to: "Hawaii",
        limit: 40,
        current: 10,
        duration_from: "10.10.2021",
        duration_to: "10.24.2021",
        summary:
          "Integer finibus nisi erat. Sed tempus dui non nunc molestie, eu aliqua...",
      },
    ];

    await Travel.insertMany(travel);
    const response = await request.get("/api/travellimit");
    expect(response.status).toBe(200);
    expect(response.body.avaliable).toBe(30);
  });

  it("testing the /api/travellimit endpoint error", async () => {
    let travel = [
      {
        from: "Budapest",
        to: "Hawaii",
        limit: 40,
        current: 45,
        duration_from: "10.10.2021",
        duration_to: "10.24.2021",
        summary:
          "Integer finibus nisi erat. Sed tempus dui non nunc molestie, eu aliqua...",
      },
    ];

    await Travel.insertMany(travel);
    const response = await request.get("/api/travellimit");
    expect(response.status).toBe(400);
    expect(response.body).toBe("Sorry not enough avaliable space");
  });

  //! működik, felküldi a billingora az adatot és fel is kell neki, csak időtúllépéssel kilép
/*  it("testing the /api/invoicedata endpoint", async () => {
   

    let travel = [
      {
        from: "Budapest",
        to: "Hawaii",
        limit: 40,
        current: 10,
        duration_from: "10.10.2021",
        duration_to: "10.24.2021",
        summary:
          "Integer finibus nisi erat. Sed tempus dui non nunc molestie, eu aliqua...",
      },
    ];

    let customer = {
      name: "kiscica",
      email: "kiscica@asd.hu",
      phone: "06305814231",
      seat: 5,
      country: "Magyarország",
      post_code: "1451",
      city: "Budapest",
      address: "1451 Budapest Dohány utca 1",
    };



    await Travel.insertMany(travel);
    // await Customer.insertMany(customer);

    const response = await request.post("/api/invoicedata").send(customer);
    //    expect(response.status).toBe(200);
    //    expect(response.body.avaliable).toBe(30);
    console.log(response);
  });
});
*/
it("testing the /api/invoicedata endpoint", async () => {
    let travel = [
      {
        from: "Budapest",
        to: "Hawaii",
        limit: 40,
        current: 36,
        duration_from: "10.10.2021",
        duration_to: "10.24.2021",
        summary:
          "Integer finibus nisi erat. Sed tempus dui non nunc molestie, eu aliqua...",
      },
    ];

    let customer = {
      name: "kiscica",
      email: "kiscica@asd.hu",
      phone: "06305814231",
      seat: 5,
      country: "Magyarország",
      post_code: "1451",
      city: "Budapest",
      address: "1451 Budapest Dohány utca 1",
    };

    await Travel.insertMany(travel);
    // await Customer.insertMany(customer);

    const response = await request.post("/api/invoicedata").send(customer);
        expect(response.status).toBe(400);
        expect(response.body).toBe("Sorry not enough avaliable space");
  });
});
