import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

export function ClientStories() {
  const stories = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Freelance Designer",
      story: "Successfully transferred $5,000 from Upwork with zero hassle. The rates were amazing!",
      fullStory: "I've been working as a freelance designer for 3 years, and finding a reliable payment solution was always a challenge. Since discovering fnfSwap, I've been able to focus on my work without worrying about payment transfers. Their rates are consistently better than other providers, and the customer service is exceptional. I recently transferred $5,000 from Upwork, and the process was smooth and quick. Highly recommended for all African freelancers!",
      amount: "$5,000",
      platform: "Upwork",
      rating: 5,
      image: "/avatars/sarah.jpg",
      date: "March 15, 2024"
    },
    {
      id: 2, 
      name: "John D.",
      role: "Content Writer",
      story: "I've been using fnfSwap for 6 months now. Best rates for Fiverr payments!",
      amount: "$3,200",
      platform: "Fiverr",
      rating: 5,
      image: "/avatars/john.jpg"
    },
    {
      id: 3,
      name: "Michael K.",
      role: "Web Developer",
      story: "Smooth transactions every time. Their customer service is top notch.",
      amount: "$8,500", 
      platform: "Toptal",
      rating: 5,
      image: "/avatars/michael.jpg"
    }
  ]

  return (
    <div className="py-12 bg-card-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">
          Success Stories from Our Clients 🌟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Dialog key={story.id}>
              <DialogTrigger asChild>
                <div className="bg-background p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-kp-yellow/20 hover:border-kp-yellow/50 cursor-pointer">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-card-hover flex items-center justify-center text-xl">
                      👤
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">{story.name}</h3>
                      <p className="text-text-secondary text-sm">{story.role}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-text-primary">{story.story}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-kp-yellow/10">
                    <div>
                      <span className="text-kp-yellow font-bold">{story.amount}</span>
                      <span className="text-text-secondary text-sm ml-2">via {story.platform}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <span key={i} className="text-kp-yellow">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-card-hover flex items-center justify-center text-xl">
                      👤
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">{story.name}</h3>
                      <p className="text-text-secondary text-sm">{story.role}</p>
                    </div>
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-4">
                  <p className="text-text-primary leading-relaxed">{story.fullStory}</p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <span className="text-kp-yellow font-bold">{story.amount}</span>
                      <span className="text-text-secondary text-sm ml-2">via {story.platform}</span>
                    </div>
                    <span className="text-text-secondary text-sm">{story.date}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-kp-yellow/10">
                  <button className="w-full bg-kp-yellow text-black font-semibold py-2 rounded-lg hover:bg-kp-green transition-colors">
                    Start Your Success Story
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            Join thousands of successful freelancers using fnfSwap
          </p>
          <button className="bg-kp-yellow text-black font-bold px-8 py-4 rounded-xl hover:bg-kp-green transition-colors">
            Start Your Success Story 🚀
          </button>
        </div>
      </div>
    </div>
  )
} 