import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai";

export const useAnalyticsData = () => {
  const salesByTrafficHeader = ["Source", "Impressions", "Clicks", "Revenue"];

const salesByTrafficData = [
  [
    <span className="flex items-center">
      <FaFacebook className="text-blue-600" size={16} />
      <span className="text-[10px] custom-font-grey ml-2">Facebook</span>
    </span>,
    35,
    5,
    "₦22,035.00",
  ],
  [
    <span className="flex items-center">
      <AiFillInstagram className="text-pink-500" size={16} />
      <span className="text-[10px] custom-font-grey ml-2">Instagram</span>
    </span>,
    35,
    5,
    "₦22,035.00",
  ],
  [
    <span className="flex items-center">
      <AiFillInstagram className="text-blue-600" size={16} />
      <span className="text-[10px] custom-font-grey ml-2">Twitter</span>
    </span>,
    35,
    5,
    "₦22,035.00",
  ],
  [
    <span className="flex items-center">
      <AiFillGoogleCircle className="text-pink-500" size={16} />
      <span className="text-[10px] custom-font-grey ml-2">Google</span>
    </span>,
    35,
    5,
    "₦22,035.00",
  ],
];

const topSellingProdHeader = ["Product", "SKU", "Qty"];

const topSellingProdData = [
  [
    <span className="flex items-center">
      <img
        src="images/prod-1.png"
        alt="product_image"
        className="h-[23px] w-[23px]"
      />
      <span className="text-xs ml-2">Fresh Lemon Fruit</span>
    </span>,
    41152845,
    203,
  ],
  [
    <span className="flex items-center">
      <img
        src="images/prod-2.png"
        alt="product_image"
        className="h-[23px] w-[23px]"
      />
      <span className="text-xs ml-2">Barista Drink Laite Lit</span>
    </span>,
    41152845,
    202,
  ],
  [
    <span className="flex items-center">
      <img
        src="images/prod-1.png"
        alt="product_image"
        className="h-[23px] w-[23px]"
      />
      <span className="text-xs ml-2">Essential Waitrose D</span>
    </span>,
    916691,
    203,
  ],
  [
    <span className="flex items-center">
      <img
        src="images/prod-2.png"
        alt="product_image"
        className="h-[23px] w-[23px]"
      />
      <span className="text-xs ml-2">Freshfarm Spaghetti</span>
    </span>,
    75452711,
    404,
  ],
];

const convertionRateData = [
  [
    <div className="">
      <p className="text-xs mb-1">Added to cart</p>
      <p className="text-xs custom-font-grey">0 sessions</p>
    </div>,
    `0.00%`,
    "-",
  ],
  [
    <div className="">
      <p className="text-xs mb-1">Reached checkout</p>
      <p className="text-xs custom-font-grey">0 sessions</p>
    </div>,
    `0.00%`,
    "-",
  ],
  [
    <div className="">
      <p className="text-xs mb-1">Sessions converted</p>
      <p className="text-xs custom-font-grey">0 sessions</p>
    </div>,
    `0.00%`,
    "-",
  ],
];

const customerLifetimeHeader = ["Customer", "CLTV", "Revenue"];

const customerLifetimeData = [
  [
    <div className="flex items-center">
      <img
        src="images/user_avatar_3.png"
        alt="product_image"
        className="h-[23px] w-[23px] rounded-md"
      />
      <div className="ml-[6px]">
        <p className="text-xs leading-none">Veres Panna</p>
        <p className="text-[10px] custom-font-grey">202 Purchases</p>
      </div>
    </div>,
    `202`,
    "N22,035.00",
  ],
  [
    <div className="flex items-center">
      <img
        src="images/user_avatar_3.png"
        alt="product_image"
        className="h-[23px] w-[23px] rounded-md"
      />
      <div className="ml-[6px]">
        <p className="text-xs">Veres Panna</p>
        <p className="text-[10px] custom-font-grey">202 Purchases</p>
      </div>
    </div>,
    `202`,
    "N22,035.00",
  ],
  [
    <div className="flex items-center">
      <img
        src="images/user_avatar_3.png"
        alt="product_image"
        className="h-[23px] w-[23px] rounded-md"
      />
      <div className="ml-[6px]">
        <p className="text-xs">Veres Panna</p>
        <p className="text-[10px] custom-font-grey">202 Purchases</p>
      </div>
    </div>,
    `202`,
    "N22,035.00",
  ],
];

const sessionByLocationHeader = ["Country", "Unique Visitors", "Sessions"];

const sessionByLocationData = [
  [
    <span className="flex items-center">
      <img
        src="images/flag_1.png"
        alt="product_image"
        className="h-[16px] w-[22.4px] rounded-md"
      />
      <span className="text-[10px] custom-font-grey ml-2">Australia</span>
    </span>,
    35,
    5
  ],
  [
    <span className="flex items-center">
      <img
        src="images/flag_2.png"
        alt="product_image"
        className="h-[16px] w-[22.4px] rounded-md"
      />
      <span className="text-[10px] custom-font-grey ml-2">Nigeria</span>
    </span>,
    12,
    6
  ],
  [
    <span className="flex items-center">
      <img
        src="images/flag_3.png"
        alt="product_image"
        className="h-[16px] w-[22.4px] rounded-md"
      />
      <span className="text-[10px] custom-font-grey ml-2">Canada</span>
    </span>,
    56,
    2
  ],
  [
    <span className="flex items-center">
      <img
        src="images/flag_4.png"
        alt="product_image"
        className="h-[16px] w-[22.4px] rounded-md"
      />
      <span className="text-[10px] custom-font-grey ml-2">USA</span>
    </span>,
    56,
    2,
  ],
];

const salesBySocialHeader = ["Source", "Unique Visitors", "Sessions"];

const salesBySocialData = [
  [
    <span className="flex items-center">
      <FaFacebook className="text-blue-600" size={16} />
      <span className="text-[10px] custom-font-grey ml-2">Facebook</span>
    </span>,
    35,
    5,
  ],
  [
    <span className="flex items-center">
      <AiFillInstagram className="text-pink-500" size={16} />
      <span className="text-[10px] custom-font-grey ml-2">Instagram</span>
    </span>,
    12,
    8,
  ],
  [
    <span className="flex items-center">
      <AiFillInstagram className="text-blue-600" size={16} />
      <span className="text-[10px] custom-font-grey ml-2">Twitter</span>
    </span>,
    56,
    2,
  ],
  [
    <span className="flex items-center">
      <AiFillGoogleCircle className="text-pink-500" size={16} />
      <span className="text-[10px] custom-font-grey ml-2">Google</span>
    </span>,
    14,
    7
  ],
];

const salesByTrafficData_2 = [
  [
    <span className="flex items-center">
      <span className="text-xs ml-2">Search Engine</span>
    </span>,
    35,
    5,
  ],
  [
    <span className="flex items-center">
      <span className="text-xs ml-2">Social Media</span>
    </span>,
    12,
    8,
  ],
  [
    <span className="flex items-center">
      <span className="text-xs ml-2">Direct</span>
    </span>,
    56,
    2,
  ],
  [
    <span className="flex items-center">
      <span className="text-xs ml-2">Referrals</span>
    </span>,
    14,
    7
  ],
];

  return {
    salesByTrafficHeader,
    salesByTrafficData,
    topSellingProdHeader,
    topSellingProdData,
    convertionRateData,
    customerLifetimeHeader,
    customerLifetimeData,
    sessionByLocationHeader,
    sessionByLocationData,
    salesBySocialHeader,
    salesBySocialData,
    salesByTrafficData_2
  };
};
