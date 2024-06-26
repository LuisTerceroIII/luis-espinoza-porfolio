import { TechIcon } from "@/components/shared/tech-stack/tech-index";

export interface ProjectType {
	name: string;
	icons: TechIcon[];
	images: string[];
	urls: string[]
}

export const projects: ProjectType[] = [
	{
		"name": "Lux Ater",
		"icons": ["typescript", "next", "css3", "firebase", "netlify"],
		"images": [
			"/projects/luxater/1.png",
			"/projects/luxater/2.png",
			"/projects/luxater/3.png",
			"/projects/luxater/4.png"
		],
		"urls": ["https://www.luxater.blog"]
	},
	{
		"name": "Hybeans App",
		"icons": ["react", "typescript", "mst", "firebase", "css3"],
		"images": [
			"/projects/hyApp/1.png",
			"/projects/hyApp/2.png",
			"/projects/hyApp/3.png",
			"/projects/hyApp/4.png",
			"/projects/hyApp/5.png",
			"/projects/hyApp/6.png",
			"/projects/hyApp/7.png",
			"/projects/hyApp/8.png",
			"/projects/hyApp/9.png",
			"/projects/hyApp/10.png"
		],
		"urls": ["https://play.google.com/store/apps/details?id=com.hybeans", "https://apps.apple.com/ar/app/hybeans/id1588248966"]
	},
	{
		"name": "Filoweb",
		"icons": ["javascript", "react", "css3", "html5"],
		"images": [
			"/projects/Webfilo/1.png",
			"/projects/Webfilo/2.png",
			"/projects/Webfilo/3.png",
			"/projects/Webfilo/4.png",
			"/projects/Webfilo/5.png",
			"/projects/Webfilo/6.png",
			"/projects/Webfilo/7.png",
			"/projects/Webfilo/8.png",
			"/projects/Webfilo/9.png",
			"/projects/Webfilo/10.png"
		],
		urls: ["https://luisterceroiii.github.io/Web-Filosofia/"]
	},
	{
		"name": "Hybeans Web",
		"icons": ["react", "typescript", "mst", "firebase", "css3"],
		"images": [
			"/projects/hyWeb/1.png",
			"/projects/hyWeb/2.png",
			"/projects/hyWeb/3.png",
			"/projects/hyWeb/4.png",
			"/projects/hyWeb/5.png",
			"/projects/hyWeb/6.png",
			"/projects/hyWeb/7.png",
			"/projects/hyWeb/8.png",
			"/projects/hyWeb/9.png",
			"/projects/hyWeb/10.png",
			"/projects/hyWeb/11.png",
			"/projects/hyWeb/12.png"
		],
		"urls": ["https://www.hybeans.com"]
	},
	{
		"name": "Jardin Management CPanel",
		"icons": ["javascript", "react", "css3", "java", "springboot", "jwt", "postgres", "amazon", "heroku"],
		"images": [
			"/projects/JardinApp/web/1.png",
			"/projects/JardinApp/web/2.png",
			"/projects/JardinApp/web/3.png",
			"/projects/JardinApp/web/4.png",
			"/projects/JardinApp/web/5.png",
			"/projects/JardinApp/web/6.png",
			"/projects/JardinApp/web/7.png",
			"/projects/JardinApp/web/8.png"
		],
		urls: []
	},
	{
		"name": "Your Lists App",
		"icons": ["javascript", "react", "material", "css3", "java", "springboot", "postgres", "heroku"],
		"images": [
			"/projects/YourListsApp/1.png",
			"/projects/YourListsApp/2.png",
			"/projects/YourListsApp/3.png"
		],
		urls: []
	}
]