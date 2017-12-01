import dynamoose from 'dynamoose';

if (process.env.NODE_ENV === 'development') {
  // dynamoose.local();
}

const assetSchema = new dynamoose.Schema({
  assetID: {
    type: String,
    hashKey: true,
    required: true,
  },
  url: {
    type: String,
    trim: true,
    // required: true,
  },
  country: {
    type: String,
    // required: true,
  },
  lang: {
    type: String,
    // required: true,
  },
  assetType: {
    type: [String],
  },
  title: {
    type: String,
    trim: true,
  },
  subHeader: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  assetUrl: {
    type: String,
    trim: true,
  },
  thumbnails: {
    type: [
      {
        url: String,
        size: String,
      },
    ],
  },
  autoMQL: {
    type: Boolean,
  },
  campainId: {
    type: String,
    trim: true,
  },
  seo: {
    canonical: {
      type: String,
      default: '',
    },
    custom_title: {
      type: String,
      default: '',
    },
    meta_description: {
      type: String,
      default: '',
    },
    meta_keywords: [{
      type: String,
    }],
    hreflang: {
      type: [{
        href: String,
        hreflang: {
          type: String,
        },
      }],
    },
  },
  categories: {
    type: [String],
    trim: true,
  },
  products: {
    type: [String],
    trim: true,
  },
  // Initial creation of the asset
  createdDate: {
    type: String,
    default: (new Date(Date.now())).toISOString(),
  },
  // Changable publish date
  publishedDate: {
    type: String,
    default: (new Date(Date.now())).toISOString(),
  },
  // Last updated date
  updatedDate: {
    type: String,
    default: (new Date(Date.now())).toISOString(),
  },
  viewCount: {
    type: Number,
    default: 0,
  },
});

export default dynamoose.model(process.env.DYNAMODB_TABLE, assetSchema);
