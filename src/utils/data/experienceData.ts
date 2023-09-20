import type { experienceDataModel } from './../models/experienceModel';

export const experienceData: experienceDataModel[] = [
	{
		company: 'Oubita',
		position: 'Jefe de departamento de Front-End y Scrum Master',
		date: 'Diciembre 2022 – Actualidad',
		content: [
			{
				project: 'Plataforma de Exchange',
				content: 'rediseño y refactor: rediseño estético de la plataforma antigua y mantenimiento de la misma, también se aprovecha este rediseño para actualizar a Angular 16, mejorar la lógica de la aplicación e implementar el patrón REDUX con la librería NGRX en la versión 16 para gestionar el estado general de la aplicación. A parte de lo mencionado anteriormente, para el desarrollo se están utilizando librerías de multi-idioma, carrusel, QR, Sumsub, entre otras.'
			},
			{
				project: 'WEB nueva',
				content: 'desarrollo de cero y mantenimiento de la página web de la empresa utilizando Angular versión 15 con Angular Universal, librerías de multi-idioma, carrusel, algunas animaciones de la aplicación y sass para el manejo de estilos.'
			},
			{
				project: 'Panel de Oubita Pay',
				content: 'desarrollo de varios componentes utilizando VueJS, maquetación y cambios de estilos en una plantilla para agilizar el desarrollo.'
			},
			{
				project: 'Página de documentación de Oubita Pay',
				content: 'desarrollo de cero y mantenimiento de la página web de la empresa utilizando Angular versión 15, librerías de multi-idioma y sass para el manejo de estilos.'
			}
		]
	},
	{
		company: 'Oubita',
		position: 'Desarrollador Front-End Angular',
		date: 'Agosto 2022 – Diciembre 2022',
		content: [
			{
				project: 'WEB',
				content: 'mantenimiento de la página web de la empresa e implementación de Angular Universal para mejorar el posicionamiento SEO con multi-idioma. El proyecto está desarrollado con Angular versión 12 con Angular Universal, librería para el multi-idioma de la aplicación y scss para el manejo de estilos.'
			},
			{
				project: 'Plataforma de exchange',
				content: 'desarrollo y mantenimiento de la plataforma de Exchange utilizando Angular en la versión 12, librerías de multi-idioma, carrusel, QR, Sumsub, etc.'
			}
		]
	},
	{
		company: 'Minsait',
		position: 'Ingeniero de Sistemas',
		date: 'Enero 2022 – Julio 2022',
		content: [
			{
				project: 'Proyecto Correos España',
				content: 'implementación de nuevas funcionalidades en el software de gestión del portal de agentes comerciales de Correos España usando React (con AntDesign), Java (con Spring Boot y Hibernate), PostgreSQL y Docker.'
			}
		]
	},
	{
		company: 'Quasar Science Resources',
		position: 'Ingeniero de Software',
		date: 'Julio 2019 – Enero 2022',
		content: [
			{
				project: 'SIMBAD',
				content: 'jefe técnico del proyecto. Rediseño de la arquitectura y gestión del proyecto.'
			},
			{
				project: 'European Space Agency (ESA)',
				content: 'trabajé en el Centro de Datos Científicos ESAC de la ESA desarrollando nuevas funciones para el Archivo Gaia usando Java, Google Web Toolkit (GWT) y Selenium. Uso de Scrum como metodología ágil con Maven, git, svn, JIRA, Confluence, Jenkins y SonarQube.'
			},
			{
				project: 'Test-Bed Telescopes Scheduler',
				content: 'desarrollo e implementación de la automatización de observaciones y mantenimiento usando PHP, JavaScript, XML, Python (Astropy y Astroquery) y PostgreSQL DataBase.'
			},
			{
				project: 'SIMBAD',
				content: 'desarrollo del software usando Go (con Micro y Gin-Gonic), HTML5, CSS3 y Angular 9 (con Openlayers), XML, JSON y Bootstrap. Además, PostgreSQL y Geoserver para la gestión de datos.'
			},
			{
				project: 'H2020 StarFormMapper',
				content: 'implementación de nuevas funcionalidades usando Python (con Django, Luigi, Celery, Astropy y Astroquery), JSON, HTML5, CSS3, JavaScript (con JQuery) y Bootstrap.'
			}
		]
	},
	{
		company: 'Quasar Science Resources',
		position: 'Prácticas',
		date: 'Octubre 2018 – Junio 2019',
		content: [
			{
				project: 'H2020 StarFormMapper',
				content: 'rediseño de la interfaz de la aplicación web.'
			},
			{
				project: 'MayFair',
				content: 'rediseño e implementación de la aplicación web.'
			}
		]
	}
]