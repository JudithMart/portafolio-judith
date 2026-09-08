#  Portafolio — Agui Judith Martínez Gutiérrez

Sitio web personal de portafolio para Frontend/Full-Stack Developer, con secciones de presentación, proyectos, cursos, herramientas técnicas, currículum descargable y formulario de contacto.

**Demo en vivo:** https://aguisprojects.vercel.app/
 

Construido con **React + TypeScript + Vite** y **Tailwind CSS**, con animaciones mediante **Motion (Framer Motion)**.

##  Características

- **Home** con animación de texto tipo "escritura" (typing effect) y navegación rápida a las secciones principales.
- **About**: presentación personal y profesional.
- **Projects**: galería de proyectos con imagen, descripción, tecnologías usadas y enlaces a demo/repositorio de GitHub.
- **Courses**: cursos y certificaciones, cada uno con su constancia en PDF.
- **Tools**: listado de tecnologías dominadas, con nivel de experiencia y proyectos donde se aplicaron.
- **Resume**: currículum interactivo en la propia página (experiencia, habilidades, logros, proyectos) además de PDF descargable.
- **Contact**: métodos de contacto (Email, LinkedIn, GitHub, Instagram, WhatsApp) y formulario de contacto funcional vía EmailJS.
- Diseño **responsive** con animaciones de entrada y transiciones en toda la navegación.

##  Stack técnico

| Categoría | Tecnología |
|---|---|
| Framework | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vite.dev/) |
| Enrutamiento | [React Router DOM](https://reactrouter.com/) |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) |
| Animaciones | [Motion](https://motion.dev/) (Framer Motion), `react-type-animation` |
| Formulario de contacto | [EmailJS](https://www.emailjs.com/) |
| Íconos | `lucide-react`, `react-icons` |
| Despliegue | [Vercel](https://vercel.com/) |

##  Estructura del proyecto

```
Portafolio/
├── public/
│   ├── avatarYo/             # Avatar/ilustraciones personales
│   ├── Courses/               # Imágenes y PDFs de constancias de cursos
│   ├── Projects/               # Capturas de los proyectos mostrados
│   ├── resume/                   # CV en PDF descargable
│   ├── dogs/, paw/, fondo/        # Assets decorativos
│   └── fonts/                      # Tipografías locales (Saira)
├── src/
│   ├── components/
│   │   ├── Contact/               # Formulario y métodos de contacto
│   │   ├── Resume/                 # Bloques del currículum (skills, experiencia, logros...)
│   │   ├── CardProjects.tsx         # Tarjeta de proyecto
│   │   ├── Course.tsx                # Tarjeta de curso
│   │   ├── Tool.tsx                   # Tarjeta de herramienta/tecnología
│   │   └── ...                         # Botones, fondos, animaciones decorativas
│   ├── layouts/
│   │   ├── MainLayout.tsx             # Layout general
│   │   ├── Navbar.tsx                  # Navegación
│   │   └── Footer.tsx                   # Pie de página
│   ├── pages/                            # Home, About, Projects, Courses, Tools, Resume, Contact
│   ├── App.tsx                            # Definición de rutas
│   └── main.tsx                            # Punto de entrada
├── tailwind.config.js
├── vite.config.ts
└── vercel.json
```

## Empezando

### Requisitos previos
- [Node.js](https://nodejs.org/) 18 o superior
- Una cuenta de [EmailJS](https://www.emailjs.com/) (para que funcione el formulario de contacto)

### Instalación

```bash
git clone https://github.com/JudithMart/Portafolio.git
cd Portafolio
npm install
```

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las credenciales de EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### Ejecutar en desarrollo

```bash
npm run dev
```

La app quedará disponible en `http://localhost:5173`.

### Otros scripts disponibles

```bash
npm run build     # Compila la app para producción (type-check + build)
npm run preview   # Sirve localmente el build de producción
npm run lint      # Ejecuta ESLint sobre el proyecto
```

##  Despliegue

El proyecto incluye configuración lista para [Vercel](https://vercel.com/) (`vercel.json`). Recuerda configurar las mismas variables de entorno en el panel de tu proyecto de Vercel.

##  Contacto

- **LinkedIn**: [linkedin.com/in/aguimartinezg](https://www.linkedin.com/in/aguimartinezg)
- **GitHub**: [github.com/JudithMart](https://github.com/JudithMart)

##  Licencia

Todos los derechos reservados. El código, contenido y assets de este portafolio son de uso personal.
