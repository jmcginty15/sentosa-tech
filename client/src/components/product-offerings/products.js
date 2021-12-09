const products = [
    {
        id: 1,
        name: 'VistaFinder Content Transmission and Management',
        description: `Worldwide transportable video (live/store & forward) transmission SystemLive report from anywhere with camera and laptop! Industry's first portable video H.264 transmission system for field coverage with videophone capability.`,
        bulletPoints: [
            'Professional quality broadcast using a laptop, handheld camera, and wireless link',
            `Being used for live commercial news coverage by Japan's largest broadcaster`,
            'Live or store & forward high quality video, all from a cell phone'
        ],
        sheetLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/VistaFinderProductSheet.pdf',
        briefLink: null,
        presentationLink: null,
        whitePaperLink: null
    },
    {
        id: 2,
        name: 'SVFTP',
        description: 'Accelerated secure file transfers over long distances.',
        bulletPoints: [
            '7 times as fast as FTP, even faster over unreliable network conditions where FTP is slower',
            'Outperforms UDP approaches, especially on loaded networks with large round trip time',
            `UDP based transfer protocols may drop data, but SVFTP won't`
        ],
        sheetLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/SVFTPProductSheet.pdf',
        briefLink: null,
        presentationLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/SVFTP-Presentation-NAB2010.ppt',
        whitePaperLink: null
    },
    {
        id: 3,
        name: 'KCipher-2',
        description: 'High security, low processor load encryption',
        bulletPoints: [
            'Mathematically as secure as AES with only 10% of the computational load',
            'Excellent choice for software based security on mobile devices',
            'Adopted and being used by the Japanese government'
        ],
        sheetLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/Kcipher2Product%20Sheet.pdf',
        briefLink: null,
        presentationLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/KCipher-2%20eg.%20general.ppt',
        whitePaperLink: null
    },
    {
        id: 4,
        name: 'MP-Factory5',
        description: 'Software development kit for MPEG-1/-2',
        bulletPoints: [
            'Supports H.264 and AVC',
            'Real-time encoding, decoding, and frame accurate fast editing',
            'RTP transmission and many other useful functions with common APIs'
        ],
        sheetLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/MP-Factory5_2010_e.pdf',
        briefLink: null,
        presentationLink: null,
        whitePaperLink: null
    },
    {
        id: 5,
        name: 'Automatic Quality Control software',
        description: 'Grade video program materials numerically for repeatable quality at any location that does not require "golden eyes" viewing to ensure your reference quality is met. Test bench verifiable and repeatable quality testing allows broadcasters and distribution services to maintain standards while optimizing resources.',
        bulletPoints: null,
        sheetLink: null,
        briefLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/QC%20PB%20NAB.pdf',
        presentationLink: null,
        whitePaperLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/WhitePaper_VQASDK.PDF'
    },
    {
        id: 6,
        name: 'QualityStation software',
        description: 'Automatic QC software combined with our high performace H.264/AVC encoder for use in mastering BD, IPTV, and more. The QualityStation allows video professionals to monitor encode streams and even use stream analysis data in multi-pass encoding. For all professional video authoring needs.',
        bulletPoints: null,
        sheetLink: null,
        briefLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/QualityStation.PDF',
        presentationLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/QualityStation%20081809.ppt',
        whitePaperLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/WhitePaper_VQASDK_1.PDF',
    },
    {
        id: 7,
        name: 'Anti-Piracy software',
        description: `Requires no preview or prior knowledge of content being analyzed! Unlike video fingerprinting solutions, KDDI Labs' Anti-Piracy solution can distinguish professionally produced video from amateur or user generated content without a lengthy or costly investment of time and setup resources. KDDI Labs' Anti-Piracy software is also designed to work with fingerprinting solutions as either a pre-filter to direct upload content traffic to more in-depth processing or as a post-filter, catching content that may not have had a fingerprint on file.`,
        bulletPoints: null,
        sheetLink: null,
        briefLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/Anti-Piracy%20NAB%20PB.pdf',
        presentationLink: null,
        whitePaperLink: null
    },
    {
        id: 8,
        name: 'H.264 Real-time Encoder software',
        description: 'Real-time 4K encoding on a commercial PC platform at a bitrate of 25 Mbps. Perfect for digital cinema and Blu-Ray authoring',
        bulletPoints: null,
        sheetLink: null,
        briefLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/4KEncoderSoftware.pdf',
        presentationLink: null,
        whitePaperLink: null
    },
    {
        id: 9,
        name: 'Real-time Software Transcoder',
        description: `KDDI Labs' state-of-the-art MPEG-2 to H.264 real-time software-based transcoder converts MPEG-2 video to H.264 with low delay and high quality. This transcoder offers a low-cost solution for next generation broadcasting and video-on-demand services, and enables efficient use of the network bandwidth.`,
        bulletPoints: null,
        sheetLink: null,
        briefLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/MPEG2-H264Transcoder.pdf',
        presentationLink: null,
        whitePaperLink: null
    },
    {
        id: 10,
        name: 'HDTV Automatic Quality Assessment software',
        description: 'A low-cost means to monitor HD content quality is here! High-precision measurement of human perceptual quality of HDTV video.',
        bulletPoints: null,
        sheetLink: null,
        briefLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/HDTVQualityAssessment.pdf',
        presentationLink: null,
        whitePaperLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/WhitePaper_VQASDK_2.PDF'
    },
    {
        id: 11,
        name: 'MPmark® MPEG video watermark - SDK',
        description: 'MPmark® is a hyper-fast MPEG video watermarking Software Development Kit (SDK) for not only MPEG-1/2 but H.264/MPEG-4 AVC. Therefore, MPmark® can add some value to your real-time processing system.',
        bulletPoints: null,
        sheetLink: null,
        briefLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/MPEGVideoWatermark.pdf',
        presentationLink: null,
        whitePaperLink: null
    },
    {
        id: 12,
        name: 'Automatic Content Filtering',
        description: 'Intelligent application that learns both desirable and undesireable content and image types, then filters images or video to remove undesired content or find images as required. Anti-pornography and copyrighted image discovery applications.',
        bulletPoints: null,
        sheetLink: null,
        briefLink: null,
        presentationLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/FilteringDemo%20071609beh.ppt',
        whitePaperLink: null
    },
    {
        id: 13,
        name: 'Free Viewpoint Video Technology',
        description: 'The goal of this innovative technology is to enable audiences of a TV program to choose their own "virtual viewpoints". For example, people can watch a soccer game from the viewpoints of players on the pitch, where TV cameras cannot be mounted.',
        bulletPoints: null,
        sheetLink: null,
        briefLink: 'http://sentosatech.com/Product_Offerings_KDDI_LABS_files/FreeViewpoint%20NAB2009.pdf',
        presentationLink: null,
        whitePaperLink: null
    }
];

export default products;