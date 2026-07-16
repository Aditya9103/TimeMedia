import mongoose from 'mongoose';

const awardEventSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AwardCategory',
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      sparse: true,
    },
    year: String,
    chiefGuest: String,
    eventDate: Date,
    venue: String,
    heroImage: {
      url: String,
      alt: String,
    },
    narrativeHtml: String,
    galleryImages: [
      {
        url: String,
        caption: String,
      },
    ],
    videoGallery: [
      {
        url: String, // YouTube URL
        title: String,
      },
    ],
    winnerBrandLogos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClientLogo',
      },
    ],
    relatedEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AwardEvent',
      },
    ],
    status: {
      type: String,
      enum: ['draft', 'upcoming', 'past'],
      default: 'draft',
    },
    openForNomination: {
      type: Boolean,
      default: false,
    },
    seo: {
      metaTitle: String,
      metaDescription: String,
      ogImage: String,
    },
  },
  { timestamps: true }
);

// Pre-save hook to generate slug if not provided
awardEventSchema.pre('save', function () {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
});

const AwardEvent = mongoose.model('AwardEvent', awardEventSchema);
export default AwardEvent;
