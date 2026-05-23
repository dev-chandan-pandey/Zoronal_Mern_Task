const Company = require("../models/Company");

// exports.createCompany = async (req, res) => {
//   try {
//     const company = await Company.create(req.body);

//     res.status(201).json({
//       success: true,
//       data: company,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

exports.createCompany = async (req, res) => {
  try {
    const company = await Company.create({
      ...req.body,

      logo: req.file?.path || "",
    });

    res.status(201).json({
      success: true,
      data: company,
      
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCompanies = async (req, res) => {
  try {
    const {
      search = "",
      sort = "latest",
      page = 1,
      limit = 10,
    } = req.query;

    const query = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { city: { $regex: search, $options: "i" } },
      ],
    };

    let sortOption = {};

    if (sort === "rating") {
      sortOption.averageRating = -1;
    } else {
      sortOption.createdAt = -1;
    }

    // const companies = await Company.find(query)
    //   .sort(sortOption)
    //   .skip((page - 1) * limit)
    //   .limit(Number(limit));

    // const total = await Company.countDocuments(query);
    const skip = (page - 1) * limit;

    const companies = await Company.find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(Number(limit));

    const total = await Company.countDocuments(query);

    const totalPages = Math.ceil(total / limit);

    // res.status(200).json({
    //   success: true,
    //   total,
    //   page: Number(page),
    //   data: companies,
    // });
    res.status(200).json({
      success: true,
      total,
      totalPages,
      currentPage: Number(page),
      data: companies,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    res.status(200).json({
      success: true,
      data: company,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};