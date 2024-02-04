import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {
    // Initialize the array as empty in the constructor
    this.contentArray = [];
  }

  // Getter function to return the Content array
  getContentArray(): Content[] {
    return this.contentArray;
  }

  // Add function to add a Content item to the end of the array
  addContent(contentItem: Content): void {
    this.contentArray.push(contentItem);
  }

  // Function to return the number of items in the array
  getItemCount(): number {
    return this.contentArray.length;
  }

  // Function to generate HTML output for a Content item at a specific index
  getContentHTML(index: number): string {
    const contentItem = this.contentArray[index];
    if (contentItem) {
      const imgTag = contentItem.imgURL ? `<img src="${contentItem.imgURL}" alt="${contentItem.title}">` : '';
      return `
        <div>
          <h2>${contentItem.title}</h2>
          <p>Description: ${contentItem.description}</p>
          <p>Creator: ${contentItem.creator}</p>
          ${imgTag}
          <p>Type: ${contentItem.type || 'N/A'}</p>
        </div>
      `;
    } else {
      return 'Invalid index';
    }
  }
}
