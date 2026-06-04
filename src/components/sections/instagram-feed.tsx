"use client";

import { InstagramIcon } from "@/components/ui/icons";
import SectionHeading from "@/components/shared/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion-wrapper";

const photos = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1509365390695-33aee754301f?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=400&q=80",
];

export default function InstagramFeed() {
  return (
    <section className="py-20 md:py-28 bg-espresso">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeading
          subtitle="Follow Along"
          title="@saixsanthosh"
          description="A glimpse into daily life at Lumiere. Follow us for coffee inspiration and behind-the-scenes moments."
        />

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-3">
          {photos.map((photo, i) => (
            <StaggerItem key={i}>
              <a
                href="https://instagram.com/saixsanthosh"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-md"
              >
                <img
                  src={photo}
                  alt="Lumiere cafe"
                  className="w-full h-full object-cover transition-transform duration-500
                             group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/50
                             transition-colors duration-300 flex items-center justify-center"
                >
                  <InstagramIcon
                    width={20}
                    height={20}
                    className="text-cream opacity-0 group-hover:opacity-100 transition-opacity
                               duration-300"
                  />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/saixsanthosh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-caramel/30
                       text-caramel text-sm font-body rounded-pill hover:bg-caramel
                       hover:text-espresso transition-all duration-300"
          >
            <InstagramIcon width={16} height={16} />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
