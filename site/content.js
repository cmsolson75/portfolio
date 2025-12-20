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
            { label: 'Work', href: '#work' },
            { label: 'Projects', href: '#projects' },
            { label: 'Research', href: '#research' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
        ],
    },
    hero: {
        heading: 'About Me',
        bio: 'AI Research Engineer at <span class="accent">VCL</span>. Specializing in generative audio, speech synthesis, and scalable ML infrastructure. I build the tools that help musicians create.',
        location: 'Seattle, WA',
        links: [
            { label: 'Email', href: 'mailto:cmsolson75@gmail.com', icon: 'mail' },
            { label: 'GitHub', href: 'https://github.com/cmsolson75', icon: 'github', newTab: true },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/cameron-olson', icon: 'linkedin', newTab: true },
        ],
    },
    featured: {
        label: 'Featured Project',
        title: 'AM I AUDIO Choir Synthesis R&D',
        company: 'VCL · Lead AI Research Engineer',
        description:
            "Led the development of AM I AUDIO's flagship choir synthesis engine—a neural network system that transforms a single voice into realistic multi-voice choral arrangements. Architected both the core synthesis model and the scale-aware Harmony Engine that enables musically intelligent voice generation.",
        highlights: [
            { title: 'Data Pipeline', detail: 'Built augmentation systems extending pitch range by 4+ octaves' },
            { title: 'Infrastructure', detail: 'Scalable GCP training with PyTorch, Lightning & W&B' },
            { title: 'Deployment', detail: 'FastAPI on Cloud Run / Vertex AI with GPU acceleration' },
            { title: 'On-Device', detail: 'ONNX export pipeline for VST plugin integration' },
        ],
        cta: { label: 'View AM I AUDIO', href: 'https://amiaudio.io/', icon: 'arrow', iconPosition: 'after' },
    },
    work: [
        {
            title: 'Lead AI Research Engineer',
            company: 'VCL, Seattle',
            date: 'Nov 2023 — Present',
            description:
                'Leading DSP/model team. Architected Choir Synthesis and Harmony Engine. Built scalable GCP training workflows and FastAPI deployment pipelines with GPU acceleration.',
        },
        {
            title: 'Assistant Professor, Electronic Production & Design',
            company: 'Berklee College of Music',
            date: 'Nov 2024 — Mar 2025',
            description:
                'Teaching MTEC-345: Machine Learning for Musicians. Mentoring student research projects and delivering lectures on ML applications in audio and music technology.',
        },
    ],
    education: {
        degree: 'B.A. Electronic Production & Design',
        school: 'Berklee College of Music',
        detail:
            'Concentration in DSP & AI Music Systems. Minor in coding with ML focus. Capstone research on Audio Diffusion Synthesis supervised by Dr. Richard Boulanger.',
    },
    projects: [
        {
            title: 'NanoGrad',
            link: 'https://github.com/cmsolson75/nanograd',
            description:
                'A PyTorch clone built from scratch in NumPy. Complete autograd engine with neural network wrapper for deep learning training. All numerical operations tested within 1e-6 accuracy against PyTorch. Inspired by micrograd and tinygrad.',
            tech: ['Python', 'NumPy', 'Autograd', 'Deep Learning'],
        },
        {
            title: 'Loan Approval System',
            link: 'https://github.com/cmsolson75/loan-approval-system',
            description:
                'Educational reference architecture for ML deployment. Intentionally simple model—the challenge is everything else: PyTorch → ONNX → FastAPI → Go gateway → Docker Compose → VPS. Built to answer the question students always ask: "How do you actually deploy a model?"',
            tech: ['PyTorch', 'ONNX', 'FastAPI', 'Go', 'Docker', 'HTMX'],
        },
        {
            title: 'Neural Probabilistic Language Model',
            link: 'https://github.com/cmsolson75/NeuralProbabilisticLanguageModel',
            description:
                "Implementation of Bengio's 2003 paper from scratch. Custom SGD optimizer with momentum and weight decay, Xavier initialization, trainer with learning rate decay. Minimal PyTorch—only autograd and CrossEntropyLoss. Includes hyperparameter tuning via random search.",
            tech: ['PyTorch', 'Language Models', 'Paper Implementation'],
        },
        {
            title: 'DenseNet-BC',
            link: 'https://github.com/cmsolson75/DenseNet',
            description:
                'Reproducible DenseNet-BC implementation with PyTorch Lightning, Hydra configs, and W&B logging. Achieved 4.54% validation error on CIFAR-10. Full test suite with shape tests, forward-pass validation, and training smoke tests.',
            tech: ['PyTorch Lightning', 'Hydra', 'W&B', 'Computer Vision'],
        },
    ],
    research: {
        cards: [
            {
                title: 'Exploring Audio Diffusion Synthesis',
                meta: 'Undergraduate Thesis · Berklee College of Music · Supervised by Dr. Richard Boulanger',
                description:
                    'Research into Raw Audio Neural Network Generation, exploring diffusion models for sound design. Built a dataset of 20,000+ drum samples, trained custom models using Dance Diffusion (Harmonai), and created original music demonstrating practical applications. Presented through a research paper, showcase video, and master class at Berklee.',
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
                    'Framework for conditioning variational autoencoders on pitch information to enable more controlled and musically relevant audio generation.',
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
    about: {
        intro: [
            "I'm an AI Research Engineer and musician based in Seattle. My career is defined by a single mission: bridging the gap between theoretical deep learning and practical musical expression. I don't just research algorithms—I design systems that fit into the creative workflow of working artists.",
        ],
        sections: [
            {
                title: "What I'm Building",
                paragraphs: [
                    'As Lead AI Research Engineer at VCL, I lead the DSP and modeling team. I architected our flagship Choir Synthesis engine—a generative system that transforms a single voice into a multi-voice choir with a scale-aware Harmony Engine.',
                    'Beyond the models, I build the infrastructure that makes them possible: scalable training workflows on Google Cloud Platform using PyTorch and Hydra, and data pipelines that extend audio pitch ranges by over four octaves.',
                ],
            },
            {
                title: 'Research & Education',
                paragraphs: [
                    'My foundation is in the academic study of music and code. I hold a degree in Electronic Production and Design from Berklee College of Music, where I researched Audio Diffusion Synthesis under Dr. Richard Boulanger.',
                    'I returned to Berklee as an Assistant Professor to teach "Machine Learning for Musicians" (MTEC-345), helping the next generation of producers leverage AI. My independent research on PCVAE, a pitch-conditioning framework for generative audio, was published at the AES International Symposium on AI and the Musician.',
                ],
            },
        ],
        skills: {
            languages: ['Python', 'GoLang', 'C++'],
            ml: ['PyTorch', 'Lightning', 'Hydra', "W&B", 'ONNX'],
            infra: ['GCP', 'Vertex AI', 'Cloud Run', 'FastAPI', 'Docker'],
            audio: ['DSP', 'Ableton Live', 'Pro Tools'],
        },
    },
    contact: {
        heading: "Let's connect",
        description: 'Open to new opportunities in AI research, particularly in audio and music technology.',
        links: [
            { label: 'cmsolson75@gmail.com', href: 'mailto:cmsolson75@gmail.com', icon: 'mail' },
            { label: '206-499-5258', href: 'tel:206-499-5258', icon: 'phone' },
            { label: 'GitHub', href: 'https://github.com/cmsolson75', icon: 'github', newTab: true },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/cameron-olson', icon: 'linkedin', newTab: true },
        ],
    },
    footer: {
        note: '© 2025 Cameron Olson · Seattle, WA',
    },
};
