const App = () => {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    attachments: []
  });
  const [formMessage, setFormMessage] = React.useState('');
  const [selectedService, setSelectedService] = React.useState(null);
  const services = [{
    title: 'PUBLICIDAD',
    description: 'Estrategia y producción de contenido publicitario.',
    image: './images/publicidad.jpg',
    details: ['Estrategia y planificación para la creación de contenido', 'Estrategias digitales', 'Producción audiovisual', 'Campañas de engagement y estrategias de crecimiento orgánico']
  }, {
    title: 'MARKETING DIGITAL',
    description: 'Impulsa tu presencia online con estrategias integrales.',
    image: './images/marketing.jpg',
    details: ['Creación de estrategias de contenido adaptadas a cada plataforma (Instagram, Facebook, TikTok).', 'Administración de comunidades digitales: gestión de mensajes directos, moderación de comentarios y construcción de relaciones auténticas con la audiencia.', 'Elaboración de calendarios editoriales y programación de publicaciones.', 'Análisis de métricas y entrega de reportes de desempeño mensual.', 'Diseño gráfico y producción audiovisual básica para redes sociales.', 'Campañas de engagement y estrategias de crecimiento orgánico']
  }, {
    title: 'CREACIÓN DE CONTENIDO',
    description: 'Asesoría, guiones y edición de videos enfocados en engagement.',
    image: './images/contenido.jpg',
    details: ['Asesorías previas para analizar la situación actual del emprendimiento', 'Creación de guiones', 'Edición de videos', 'Campañas de engagement y estrategias de crecimiento orgánico.']
  }, {
    title: 'MARCA PERSONAL',
    description: 'Diseñamos tu identidad y optimizamos tus perfiles.',
    image: './images/marca.jpg',
    details: ['Desarrollo de marca personal: Creación de identidad visual y de marca para emprendedores en redes sociales.', 'Estrategia de contenido: Planificación y creación de contenido atractivo y relevante para TikTok.', 'Crecimiento de audiencia: Técnicas y estrategias para aumentar la visibilidad y el engagement en TikTok.', 'Optimización de perfil: Mejora de perfiles en redes sociales para aumentar la credibilidad y la atracción de seguidores.', 'Análisis y seguimiento: Monitoreo de resultados y ajustes en la estrategia para maximizar el impacto.']
  }];
  const teamMembers = [{
    name: 'Mercedes Elizabeth Cedeño Giler',
    role: 'PUBLICIDAD',
    email: 'mercedegiler1311@gmail.com',
    image: './images/mercedescedeno.jpg'
  }, {
    name: 'Lenin Leodan Palma Solórzano',
    role: 'MARKETING DIGITAL',
    email: 'leodanpalma06@gmail.comm',
    image: './images/leninpalma.jpg'
  }, {
    name: 'Melany Daniela Vera Franco',
    role: 'CREACIÓN DE CONTENIDO',
    email: 'melanyvera@agora.com',
    image: './images/melanyvera.jpg'
  }, {
    name: 'Melissa Gabriela Chávez Solórzano',
    role: 'MARCA PERSONAL',
    email: 'chavez_bdp_123@hotmail.com',
    image: './images/melissachavez.jpg'
  }];
  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;
    if (name === 'attachments') {
      setFormData({
        ...formData,
        attachments: Array.from(files)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    setFormMessage('');
    if (!formData.name || !formData.email || !formData.message) {
      setFormMessage('Por favor, completa todos los campos obligatorios.');
      return;
    }
    console.log('Datos del formulario enviados:', formData);
    setFormMessage('¡Tu solicitud ha sido enviada con éxito! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      message: '',
      attachments: []
    });
    e.target.reset();
  };
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return React.createElement("div", {
          className: "p-6"
        }, React.createElement("img", {
          src: "./images/logo.png",
          alt: "\xC1gora Comunicaciones Logo",
          className: "mx-auto mb-4 h-40 w-40"
        }), React.createElement("h2", {
          className: "text-3xl font-extrabold text-gray-900 mb-6 text-center"
        }, "\xA1Bienvenido a \xC1gora Comunicaciones!"), React.createElement("p", {
          className: "text-gray-700 text-lg mb-8 text-center"
        }, "Somos tu aliado estrat\xE9gico en comunicaci\xF3n publicitaria. Conectamos marcas con personas, transformando ideas en resultados."), React.createElement("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        }, services.map((service, index) => React.createElement("div", {
          key: index,
          className: "bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer",
          onClick: () => {
            setSelectedService(service);
            setCurrentPage('detail');
          }
        }, React.createElement("img", {
          src: service.image,
          alt: service.title,
          className: "w-full h-48 object-cover",
          onError: e => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/400x200/FACC15/000000?text=Imagen+No+Disponible';
          }
        }), React.createElement("div", {
          className: "p-6"
        }, React.createElement("h3", {
          className: "text-xl font-semibold text-gray-800 mb-3"
        }, service.title), React.createElement("p", {
          className: "text-gray-600 text-sm"
        }, service.description))))), React.createElement("p", {
          className: "text-center text-gray-600 mt-12 text-sm"
        }, "Descubre m\xE1s sobre c\xF3mo podemos impulsar tu marca."));
      case 'services':
        return React.createElement("div", {
          className: "p-6"
        }, React.createElement("h2", {
          className: "text-3xl font-extrabold text-gray-900 mb-6 text-center"
        }, "Nuestro Portafolio de Servicios"), React.createElement("div", {
          className: "grid grid-cols-1 gap-6"
        }, services.map((service, index) => React.createElement("div", {
          key: index,
          className: "bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center transition duration-300 transform hover:scale-[1.02]"
        }, React.createElement("img", {
          src: service.image,
          alt: service.title,
          className: "w-full md:w-1/3 h-48 md:h-32 object-cover rounded-md mb-4 md:mb-0 md:mr-6",
          onError: e => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/400x200/FACC15/000000?text=Imagen+No+Disponible';
          }
        }), React.createElement("div", {
          className: "flex-1"
        }, React.createElement("h3", {
          className: "text-2xl font-semibold text-gray-800 mb-2"
        }, service.title), React.createElement("ul", {
          className: "text-gray-700 list-disc pl-5 space-y-1 text-sm"
        }, service.details.map((item, i) => React.createElement("li", {
          key: i
        }, item))))))));
      case 'detail':
        return React.createElement("div", {
          className: "p-6 max-w-2xl mx-auto"
        }, React.createElement("button", {
          className: "mb-4 text-yellow-600 hover:underline",
          onClick: () => {
            setSelectedService(null);
            setCurrentPage('home');
          }
        }, "\u2190 Volver"), selectedService && React.createElement("div", {
          className: "bg-white rounded-xl shadow-lg p-6"
        }, React.createElement("img", {
          src: selectedService.image,
          alt: selectedService.title,
          className: "w-full h-48 object-cover rounded-md mb-4",
          onError: e => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/400x200/FACC15/000000?text=Imagen+No+Disponible';
          }
        }), React.createElement("h3", {
          className: "text-2xl font-semibold text-gray-800 mb-2"
        }, selectedService.title), React.createElement("ul", {
          className: "text-gray-700 list-disc pl-5 space-y-1"
        }, selectedService.details.map((item, i) => React.createElement("li", {
          key: i
        }, item)))));
      case 'about':
        return React.createElement("div", {
          className: "p-6"
        }, React.createElement("h2", {
          className: "text-3xl font-extrabold text-gray-900 mb-6 text-center"
        }, "Nuestro Equipo"), React.createElement("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        }, teamMembers.map((member, index) => React.createElement("div", {
          key: index,
          className: "bg-white rounded-xl shadow-lg p-6 text-center transition duration-300 transform hover:scale-105"
        }, React.createElement("img", {
          src: member.image,
          alt: member.name,
          className: "w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-500 shadow-md",
          onError: e => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/100x100/FACC15/000000?text=User';
          }
        }), React.createElement("h3", {
          className: "text-xl font-semibold text-gray-800 mb-1"
        }, member.name), React.createElement("p", {
          className: "text-yellow-600 font-medium mb-2"
        }, member.role), React.createElement("p", {
          className: "text-gray-600 text-sm"
        }, member.email)))), React.createElement("p", {
          className: "text-center text-gray-600 mt-8 text-sm"
        }, "Profesionales apasionados comprometidos con tu \xE9xito."));
      case 'contact':
        return React.createElement("div", {
          className: "p-6 max-w-2xl mx-auto"
        }, React.createElement("h2", {
          className: "text-3xl font-extrabold text-gray-900 mb-6 text-center"
        }, "Solicita Informaci\xF3n o Cotizaci\xF3n"), React.createElement("div", {
          className: "bg-white rounded-xl shadow-lg p-8"
        }, React.createElement("form", {
          onSubmit: handleSubmit,
          className: "space-y-6"
        }, React.createElement("div", null, React.createElement("label", {
          htmlFor: "name",
          className: "block text-lg font-medium text-gray-700 mb-2"
        }, "Nombre completo:"), React.createElement("input", {
          type: "text",
          id: "name",
          name: "name",
          value: formData.name,
          onChange: handleChange,
          className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-md",
          placeholder: "Tu nombre",
          required: true
        })), React.createElement("div", null, React.createElement("label", {
          htmlFor: "email",
          className: "block text-lg font-medium text-gray-700 mb-2"
        }, "Correo electr\xF3nico:"), React.createElement("input", {
          type: "email",
          id: "email",
          name: "email",
          value: formData.email,
          onChange: handleChange,
          className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-md",
          placeholder: "ejemplo@dominio.com",
          required: true
        })), React.createElement("div", null, React.createElement("label", {
          htmlFor: "message",
          className: "block text-lg font-medium text-gray-700 mb-2"
        }, "Tu mensaje o detalles de la solicitud:"), React.createElement("textarea", {
          id: "message",
          name: "message",
          rows: "6",
          value: formData.message,
          onChange: handleChange,
          className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-md",
          placeholder: "Descr\xEDbenos tus necesidades...",
          required: true
        })), React.createElement("div", null, React.createElement("label", {
          htmlFor: "attachments",
          className: "block text-lg font-medium text-gray-700 mb-2"
        }, "Adjuntar archivos (opcional):"), React.createElement("input", {
          type: "file",
          id: "attachments",
          name: "attachments",
          multiple: true,
          onChange: handleChange,
          className: "mt-1 block w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
        }), formData.attachments.length > 0 && React.createElement("p", {
          className: "text-sm text-gray-500 mt-2"
        }, "Archivos seleccionados: ", formData.attachments.map(f => f.name).join(', '))), formMessage && React.createElement("div", {
          className: `p-4 rounded-md text-center ${formMessage.includes('éxito') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`
        }, formMessage), React.createElement("button", {
          type: "submit",
          className: "w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out"
        }, "Enviar Solicitud"))));
      default:
        return null;
    }
  };
  React.useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js');
    }
  }, []);
  return React.createElement("div", {
    className: "min-h-screen bg-gray-100 font-inter flex flex-col"
  }, React.createElement("header", {
    className: "bg-gray-900 text-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10"
  }, React.createElement("img", {
    src: "./images/logosml.png",
    alt: "\xC1gora Comunicaciones Logo",
    className: "h-10 w-auto"
  }), React.createElement("button", {
    className: "md:hidden text-yellow-400 focus:outline-none",
    onClick: () => document.getElementById('navbar-menu').classList.toggle('hidden')
  }, React.createElement("svg", {
    className: "w-8 h-8",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 6h16M4 12h16M4 18h16"
  }))), React.createElement("nav", {
    id: "navbar-menu",
    className: "hidden md:flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 absolute md:relative top-full left-0 w-full bg-gray-900 md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none"
  }, React.createElement("button", {
    onClick: () => {
      setSelectedService(null);
      setCurrentPage('home');
    },
    className: `block py-2 px-3 rounded-md text-lg font-medium transition duration-300 ease-in-out ${currentPage === 'home' ? 'bg-yellow-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
  }, "Inicio"), React.createElement("button", {
    onClick: () => {
      setSelectedService(null);
      setCurrentPage('services');
    },
    className: `block py-2 px-3 rounded-md text-lg font-medium transition duration-300 ease-in-out ${currentPage === 'services' ? 'bg-yellow-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
  }, "Servicios"), React.createElement("button", {
    onClick: () => {
      setSelectedService(null);
      setCurrentPage('about');
    },
    className: `block py-2 px-3 rounded-md text-lg font-medium transition duration-300 ease-in-out ${currentPage === 'about' ? 'bg-yellow-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
  }, "Qui\xE9nes somos"), React.createElement("button", {
    onClick: () => {
      setSelectedService(null);
      setCurrentPage('contact');
    },
    className: `block py-2 px-3 rounded-md text-lg font-medium transition duration-300 ease-in-out ${currentPage === 'contact' ? 'bg-yellow-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
  }, "Contacto"))), React.createElement("main", {
    className: "flex-grow pt-20 pb-16"
  }, renderContent()), React.createElement("footer", {
    className: "bg-gray-900 text-white p-4 flex justify-around items-center fixed bottom-0 left-0 w-full z-10 md:hidden shadow-lg"
  }, React.createElement("button", {
    onClick: () => {
      setSelectedService(null);
      setCurrentPage('home');
    },
    className: `flex flex-col items-center text-sm font-medium transition duration-300 ease-in-out ${currentPage === 'home' ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-300'}`
  }, React.createElement("svg", {
    className: "w-6 h-6 mb-1",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  })), "Inicio"), React.createElement("button", {
    onClick: () => {
      setSelectedService(null);
      setCurrentPage('services');
    },
    className: `flex flex-col items-center text-sm font-medium transition duration-300 ease-in-out ${currentPage === 'services' ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-300'}`
  }, React.createElement("svg", {
    className: "w-6 h-6 mb-1",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9.75 17L9 20l-3 1h2m0-16V5a2 2 0 012-2h2a2 2 0 012 2v2M9 16l-3-12h10l-3 12M12 15l-3-6h6l-3 6m-6-6h6"
  })), "Servicios"), React.createElement("button", {
    onClick: () => {
      setSelectedService(null);
      setCurrentPage('about');
    },
    className: `flex flex-col items-center text-sm font-medium transition duration-300 ease-in-out ${currentPage === 'about' ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-300'}`
  }, React.createElement("svg", {
    className: "w-6 h-6 mb-1",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M12 11V9m0 2a4 4 0 100-8 4 4 0 000 8zm-2 11H8a2 2 0 01-2-2v-2a2 2 0 00-2-2H2a2 2 0 00-2 2v2a2 2 0 01-2 2h2zm10 0h2a2 2 0 002-2v-2a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 002 2h-2zm-6-4a4 4 0 100-8 4 4 0 000 8z"
  })), "Equipo"), React.createElement("button", {
    onClick: () => {
      setSelectedService(null);
      setCurrentPage('contact');
    },
    className: `flex flex-col items-center text-sm font-medium transition duration-300 ease-in-out ${currentPage === 'contact' ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-300'}`
  }, React.createElement("svg", {
    className: "w-6 h-6 mb-1",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  })), "Contacto")));
};
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
