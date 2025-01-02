import { ClientStories } from '../components/clients/ClientStories'

export function ClientStoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-card-background py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-text-primary">
            Our Client Success Stories 🌟
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Discover how freelancers across Africa are achieving their financial goals with fnfSwap's reliable payment solutions.
          </p>
        </div>
      </div>

      {/* Stories Section */}
      <ClientStories />
    </div>
  )
} 