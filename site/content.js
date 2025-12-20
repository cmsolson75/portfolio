export const content = {
    meta: {
        title: 'Cameron Olson | AI Research Engineer',
        description:
            'Cameron Olson - AI Research Engineer specializing in generative audio, speech synthesis, and scalable ML infrastructure. Lead AI Research Engineer at VCL.',
        keywords: 'AI, Machine Learning, Audio Synthesis, Speech Synthesis, PyTorch, Deep Learning',
        author: 'Cameron Olson',
        ogTitle: 'Cameron Olson | AI Research Engineer',
        ogDescription: 'AI Research Engineer specializing in generative audio, speech synthesis, and scalable ML infrastructure.',
        ogUrl: 'https://cameronolson.dev',
    },
    nav: {
        name: 'Cameron Olson',
        links: [
            { label: 'Featured', href: '#featured' },
            { label: 'Experience', href: '#experience' },
            { label: 'Projects', href: '#projects' },
            { label: 'Research', href: '#research' },
            { label: 'Education', href: '#education' },
            { label: 'Contact', href: '#contact' },
        ],
    },
    hero: {
        heading: 'AI Research Engineer',
        bio: 'Building generative audio and speech systems end-to-end—modeling, data, and deployment. Led choir synthesis at VCL and ship reliable ML infra for creative teams.',
        location: 'Seattle, WA',
        links: [
            { label: 'Email', href: 'mailto:cmsolson75@gmail.com', icon: 'mail' },
            { label: 'GitHub', href: 'https://github.com/cmsolson75', icon: 'github', newTab: true },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cameron-olson-aaba85201/', icon: 'linkedin', newTab: true },
        ],
    },
    featured: {
        label: 'Featured Project',
        title: 'AM I AUDIO Choir Synthesis R&D',
        company: 'VCL · Lead AI Research Engineer',
        description:
            'Neural choir synthesis engine that turns one voice into many. Built the core model, harmony system, and training pipeline.',
        highlights: [
            { title: 'Data Pipeline', detail: 'Built augmentation systems extending pitch range by 4+ octaves' },
            { title: 'Infrastructure', detail: 'Scalable GCP training with PyTorch, Lightning & W&B' },
            { title: 'Deployment', detail: 'FastAPI on Cloud Run / Vertex AI with GPU acceleration' },
            { title: 'On-Device', detail: 'ONNX export pipeline for VST plugin integration' },
        ],
        cta: { label: 'View AM I AUDIO', href: 'https://amiaudio.io/', icon: 'arrow', iconPosition: 'after' },
    },
    experience: [
        {
            title: 'Lead AI Research Engineer',
            company: 'VCL Audio',
            date: 'Nov 2023 — Present',
            description:
                'Lead DSP/modeling team; shipped choir synthesis and harmony engine. Scaled GCP training + FastAPI deployment with GPU acceleration.',
        },
        {
            title: 'Assistant Professor, Electronic Production & Design',
            company: 'Berklee College of Music',
            date: 'Nov 2024 — Mar 2025',
            description:
                'Taught MTEC-345: Machine Learning for Musicians. Mentoring student research projects and delivering lectures on ML applications in audio and music technology.',
        },
    ],
    education: {
        degree: 'B.A. Electronic Production & Design',
        school: 'Berklee College of Music',
        detail: 'Focus on DSP and AI music systems. Capstone on Audio Diffusion Synthesis with Dr. Richard Boulanger.',
    },
    projects: [
        {
            title: 'NanoGrad',
            link: 'https://github.com/cmsolson75/nanograd',
            description:
                'PyTorch-style autograd in NumPy with NN wrapper; ops verified within 1e-6 of PyTorch.',
            tech: ['Python', 'NumPy', 'Autograd', 'Deep Learning'],
        },
        {
            title: 'Neural Probabilistic Language Model',
            link: 'https://github.com/cmsolson75/NeuralProbabilisticLanguageModel',
            description:
                "Reproduction of Bengio's 2003 NPLM: custom SGD (momentum, weight decay), Xavier init, LR decay, hyperparam search.",
            tech: ['PyTorch', 'Language Models', 'Paper Implementation'],
        },
        {
            title: 'Loan Approval System',
            link: 'https://github.com/cmsolson75/loan-approval-system',
            description:
                'Educational reference architecture for ML deployment. Intentionally simple model—the challenge is everything else: PyTorch → ONNX → FastAPI → Go gateway → Docker Compose → VPS. Built to answer the question students always ask: "How do you actually deploy a model?"',
            tech: ['PyTorch', 'ONNX', 'FastAPI', 'Go', 'Docker', 'HTMX'],
        },
    ],
    research: {
        cards: [
            {
                title: 'Exploring Audio Diffusion Synthesis',
                meta: 'Undergraduate Thesis · Berklee College of Music · Supervised by Dr. Richard Boulanger',
                description:
                    'Thesis on diffusion models for sound design; custom dataset (20k+ drums), trained models, and showcased musical applications.',
                links: [
                    { label: 'Research Paper', href: '#', icon: 'document' },
                    { label: 'Video Showcase', href: '#', icon: 'play' },
                    { label: 'Stay With Me', href: '#', icon: 'audio' },
                ],
            },
            {
                title: 'PCVAE: A Pitch Conditioning Framework for Generative Audio Synthesis',
                meta: 'AES International Symposium on AI and the Musician · June 2024 · Boston, MA',
                description:
                    'Pitch-conditioning framework for VAEs to control generative audio; presented at AES AI and the Musician.',
                links: [
                    {
                        label: 'View in AES E-Library',
                        href: 'http://www.aes.org/e-lib',
                        icon: 'external',
                        newTab: true,
                    },
                ],
            },
        ],
        creative: [
            {
                tag: 'AI Song Contest 2025 · Finalist',
                title: 'Dadabots Collaboration',
                description:
                    'Vocal design for finalist entry in the international AI Song Contest, collaborating with the Dadabots collective.',
                href: 'https://www.aisongcontest.com/participants-2025/dadabots',
            },
            {
                tag: 'AI Song Contest 2024',
                title: 'Almost Human',
                description:
                    'Original AI-assisted composition exploring the boundaries of human and machine creativity in music production.',
                href: 'https://www.aisongcontest.com/participants-2024/almost-human',
            },
            {
                tag: 'AI Song Contest 2023',
                title: 'Almost Human',
                description:
                    'Continued exploration of AI-driven music creation and generative audio techniques.',
                href: 'https://www.aisongcontest.com/participants-2023/almost-human',
            },
        ],
    },
    contact: {
        heading: "Let's connect",
        description: 'Open to new opportunities in AI research, particularly in audio and music technology.',
        links: [
            { label: 'cmsolson75@gmail.com', href: 'mailto:cmsolson75@gmail.com', icon: 'mail' },
            { label: 'GitHub', href: 'https://github.com/cmsolson75', icon: 'github', newTab: true },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cameron-olson-aaba85201/', icon: 'linkedin', newTab: true },
        ],
    },
    footer: {
        note: '© 2025 Cameron Olson',
    },
};
