
tailwind.config = {
    theme: {
    extend: {
    colors: {
    green: '#da373d',
    blue: '#0187FF',
    lightBackground: "#9EA6B3",
    tag: '#B3BAC6',
    text: "#B3BAC6",
    blueBackground: "#304352",
    borderGray: "#E8EAEE",
    backgroundGray: "#E5EAF2",
    grayBlue: "#636973",
    textOpacity: "rgba(179,186,198,0.3)",
    background: "#1D1F22",
},
    backgroundImage: {
    gradientText: "linear-gradient(90deg, #ff8f20 0%, #ff3232 100%)",
    gradientBox: "linear-gradient(199deg, #8DA1C3 0%, #B3CEFA 100%)",
    gradientBlack: "linear-gradient(183deg, #333942 0%, #3B424D 100%)",
    gradientActive: "linear-gradient(199deg, #8DA1C3 0%, #B3CEFA 100%)",
    radialMarker: "radial-gradient(closest-side at 50% 50%, #4B93FF30 0%, #1D1F2230 100%)",
    heroMobile: "url('./images/hero/hero.webp')",
    heroService: "url('./icons/services-detail/wireframe.svg')",
    peopleJaroslav: "url('./images/people/jaroslav.webp')",
    peopleJana: "url('./images/people/jana.webp')",
        check: "url('./icons/check.svg')",

    },
    boxShadow: {
    primaryButton: '0px 8px 25px #0187FF30',
},
    keyframes: {
    bounceSlow: {
    '0%, 100%': { transform: 'translateY(-10px)' },
    '50%': { transform: 'translateY(20px)' },
},
},
    animation: {
    'bounce-slow': 'bounceSlow 2s ease-in-out infinite',

},
}
}
}
