import ContentLayout, { type Section } from '../components/ContentLayout';

export default function HowItWorksPage() {
  const sections: Section[] = [
    {
      id: "overview",
      title: "Overview",
      content: (
        <>
          <p>
            Welcome to Fixam Pathways. Our platform is designed to help you build real-world skills through interactive, simulated job training. 
            Whether you are starting a new career or upgrading your existing skills, our career paths offer a practical approach to learning.
          </p>
          <p>
            Our paths are 100% free, self-paced, and developed in partnership with industry experts to ensure you learn exactly what clients are looking for.
          </p>
        </>
      )
    },
    {
      id: "step-1",
      title: "Step 1: Sign up and pick a skill category",
      content: (
        <>
          <p>
            Browse our extensive catalog of in-demand skill categories, including Electrical Work, Plumbing, Beauty & Grooming, and more. 
            Once you find a path that matches your interests, sign up for a free Fixam account to begin your journey.
          </p>
        </>
      )
    },
    {
      id: "step-2",
      title: "Step 2: Complete real-world tasks",
      content: (
        <>
          <p>
            Each career path is broken down into bite-sized, interactive tasks that simulate actual jobs you would perform in the field. 
            You will review client requirements, plan your approach, and execute the necessary steps to complete the task successfully.
          </p>
        </>
      )
    },
    {
      id: "step-3",
      title: "Step 3: Compare and learn",
      content: (
        <>
          <p>
            After completing a task, you'll have the opportunity to compare your work with model answers provided by industry professionals. 
            This feedback loop ensures you understand the best practices and safety standards required for the job.
          </p>
        </>
      )
    },
    {
      id: "step-4",
      title: "Step 4: Earn your certificate",
      content: (
        <>
          <p>
            Upon successfully completing all tasks in a career path, you will earn a verified Fixam Certificate. 
            This certificate demonstrates your competence to potential clients and unlocks higher-paying opportunities on the Fixam platform.
          </p>
        </>
      )
    }
  ];

  return (
    <ContentLayout
      pageTitle="How Fixam Pathways Works"
      effectiveDate="Last updated: October 2026"
      brandText="Fixam Corporate"
      sections={sections}
    />
  );
}
