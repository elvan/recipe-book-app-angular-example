export class Recipe {
  name: string;
  description: string;
  imagePath: string;

  constructor({ name, description, imagePath }: Recipe) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
