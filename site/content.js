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
            { label: 'Experience', href: '#experience' },
            { label: 'Projects', href: '#projects' },
            { label: 'Research', href: '#research' },
            { label: 'Education', href: '#education' },
            { label: 'Contact', href: '#contact' },
        ],
    },
    hero: {
        heading: 'AI Research Engineer',
        bio: 'I am an AI Research Engineer at VCL Audio, leading R&D for AM I AUDIO. I oversee model architecture, training, and data systems for generative audio. I am also a musician, producer, and drummer, and I focus on translating deep learning research into production-ready AI tools musicians actually want to use.',
        location: 'Seattle, WA',
        links: [
            { label: 'Email', href: 'mailto:cmsolson75@gmail.com', icon: 'mail' },
            { label: 'GitHub', href: 'https://github.com/cmsolson75', icon: 'github', newTab: true },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cameron-olson-aaba85201/', icon: 'linkedin', newTab: true },
        ],
    },
    experience: [
        {
            title: 'Lead AI Research Engineer',
            company: 'VCL Audio',
            date: 'Nov 2023 — Present',
            description:
                'Lead R&D for the AM I AUDIO generative choir synthesis stack: owned singer dataset strategy and QA, designed and trained the core models, and built scalable PyTorch + Hydra training on GCP. Shipped the beta inference service and integration path via FastAPI, with profiling/optimization for production latency.'
        },
        {
            title: 'Assistant Professor, Electronic Production & Design',
            company: 'Berklee College of Music',
            date: 'Nov 2024 — Mar 2025',
            description:
                'Taught MTEC-345: Machine Learning for Musicians. Mentored student research projects and delivered lectures on ML applications in audio and music technology.',
        },
    ],
    education: {
        degree: 'B.A. Electronic Production & Design',
        school: 'Berklee College of Music',
        detail: 'Awarded Drum Performance Scholarship. Focus on DSP and AI music systems. Capstone on Audio Diffusion Synthesis with Dr. Richard Boulanger.',
    },
    projects: [
        {
            title: 'AM I AUDIO — Single Voice → Choir Engine',
            description:
                'Production generative audio system that transforms a single monophonic vocal into a multi-voice choir with scale-aware harmonic control. I led the system end-to-end, from singer dataset design and QA through model architecture, large-scale training, and low-latency inference deployment.',
            details: [
                'Designed and executed singer data collection across controlled pitch ranges, vowel sets, dynamics, and articulation, with automated QA and pitch validation.',
                'Built data pipelines to extend usable vocal pitch ranges by over four octaves via augmentation and resynthesis strategies.',
                'Designed and trained the core generative models, focusing on pitch conditioning, timbral consistency, and phonetic fidelity.',
                'Implemented reproducible training workflows on Google Cloud Platform using PyTorch and Hydra, with experiment tracking and model versioning.',
                'Developed a scale-aware Harmony Engine enabling musically constrained chord generation from a single input voice.',
                'Deployed an optimized FastAPI inference service for the production demo, including profiling-driven latency and memory optimizations.',
            ],
            links: [
                { label: 'Demo Video', href: 'https://youtu.be/KpbuQZgpIAM', icon: 'play', newTab: true },
                { label: 'Project Site', href: 'https://amiaudio.io/', icon: 'external', newTab: true },
            ],
            tech: [
                'Generative Audio',
                'Choir Synthesis',
                'Pitch Conditioning',
                'Harmony Modeling',
                'PyTorch',
                'Hydra',
                'GCP',
                'FastAPI',
                'Data QA',
                'Inference Optimization',
            ],
        },
        {
        title: 'NanoGrad',
        description:
            'NumPy-based neural network microframework built to deeply understand training mechanics end-to-end. Implements an autograd engine (tape + topological backprop), PyTorch-style Modules, initializers, common activations, losses, broadcasting-aware ops, and multiple optimizers (SGD/momentum/Nesterov, Adam/AdamW, RMSProp, Adagrad, Adadelta).',
        links: [
            {
            label: 'GitHub',
            href: 'https://github.com/cmsolson75/nanograd',
            icon: 'github',
            newTab: true,
            },
        ],
        tech: ['Python', 'NumPy', 'Autograd', 'Optimizers', 'NN Framework'],
        },
        {
        title: 'Neural Probabilistic Language Model (Bengio, 2003)',
        description:
            'Reimplementation of Bengio et al.’s neural probabilistic language model, emphasizing optimizer mechanics (SGD + momentum + weight decay), initialization schemes, and perplexity-based evaluation with minimal PyTorch abstractions.',
        links: [
            {
            label: 'GitHub',
            href: 'https://github.com/cmsolson75/NeuralProbabilisticLanguageModel',
            icon: 'github',
            newTab: true,
            },
        ],
        tech: ['PyTorch', 'Language Models', 'Optimization', 'Paper Reproduction'],
        },
        {
        title: 'End-to-End ML Deployment Reference',
        description:
            'Teaching-oriented reference system built to demonstrate how research models reach production. Designed for Berklee students to answer the question “how do you actually deploy a model?”, covering export, inference services, and real deployment boundaries.',
        links: [
            {
            label: 'GitHub',
            href: 'https://github.com/cmsolson75/loan-approval-system',
            icon: 'github',
            newTab: true,
            },
        ],
        tech: ['PyTorch', 'ONNX', 'FastAPI', 'Go', 'Docker'],
        },
    ],
    research: {
        cards: [
            {
            title: 'Exploring Audio Diffusion Synthesis',
            meta: 'Undergraduate Thesis · Berklee College of Music · Supervised by Dr. Richard Boulanger',
            description:
                'Undergraduate thesis investigating diffusion models for sound design. Built a custom dataset of 20k+ percussive samples, trained diffusion-based generative models, and evaluated their use as controllable musical synthesis tools.',
            links: [
                { label: 'Research Paper', href: '/papers/exploring_audio_diffusion_synthesis.pdf', icon: 'document', newTab: true },
                { label: 'Video Showcase', href: 'https://www.youtube.com/watch?v=ijDwHkTExJk', icon: 'play' },
                { label: 'Audio Example', href: 'https://youtu.be/ItVekGrhfFg', icon: 'audio' },
            ],
            },
            {
            title: 'PCVAE: A Pitch Conditioning Framework for Generative Audio Synthesis',
            meta: 'AES International Symposium on AI and the Musician · June 2024 · Boston, MA',
            description:
                'Proposed a pitch-conditioning framework for variational autoencoders enabling explicit control over pitch in generative audio models. Presented at the AES International Symposium on AI and the Musician.',
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
            title: 'Dadabots',
            description:
                'Finalist collaboration with Dadabots, contributing voice model design and choir synthesis systems within an AI-assisted music production workflow.',
            href: 'https://www.aisongcontest.com/participants-2025/dadabots',
            },
            {
                tag: 'AI Song Contest 2024',
                title: 'Almost Human',
                description:
                'Human-led AI music project exploring diffusion models as sampling and resynthesis tools rather than end-to-end generators, under explicit constraints prioritizing human authorship.',
                href: 'https://www.aisongcontest.com/participants-2024/almost-human',
            },
            {
                tag: 'AI Song Contest 2023',
                title: 'Almost Human',
                description:
                'Early exploration of AI-assisted music workflows combining MIDI language models, diffusion-based audio generation, and traditional sound design.',
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
