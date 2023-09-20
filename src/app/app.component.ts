import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1694009606218-eb46476e6300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1693057205752-f7cabeaff629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the land',
      url: 'https://images.unsplash.com/photo-1693935597805-f574d2fdc0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the ocean',
      url: 'https://images.unsplash.com/photo-1693761935216-a2f3a7017795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1694009606218-eb46476e6300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1693057205752-f7cabeaff629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the land',
      url: 'https://images.unsplash.com/photo-1693935597805-f574d2fdc0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the ocean',
      url: 'https://images.unsplash.com/photo-1693761935216-a2f3a7017795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1694009606218-eb46476e6300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1693057205752-f7cabeaff629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the land',
      url: 'https://images.unsplash.com/photo-1693935597805-f574d2fdc0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the ocean',
      url: 'https://images.unsplash.com/photo-1693761935216-a2f3a7017795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1694009606218-eb46476e6300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1693057205752-f7cabeaff629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the land',
      url: 'https://images.unsplash.com/photo-1693935597805-f574d2fdc0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the ocean',
      url: 'https://images.unsplash.com/photo-1693761935216-a2f3a7017795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1694009606218-eb46476e6300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1693057205752-f7cabeaff629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the land',
      url: 'https://images.unsplash.com/photo-1693935597805-f574d2fdc0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the ocean',
      url: 'https://images.unsplash.com/photo-1693761935216-a2f3a7017795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1694009606218-eb46476e6300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1693057205752-f7cabeaff629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the land',
      url: 'https://images.unsplash.com/photo-1693935597805-f574d2fdc0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the ocean',
      url: 'https://images.unsplash.com/photo-1693761935216-a2f3a7017795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1694009606218-eb46476e6300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1693057205752-f7cabeaff629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the land',
      url: 'https://images.unsplash.com/photo-1693935597805-f574d2fdc0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the ocean',
      url: 'https://images.unsplash.com/photo-1693761935216-a2f3a7017795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach ',
      url: 'https://images.unsplash.com/photo-1694009606218-eb46476e6300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1693057205752-f7cabeaff629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the land',
      url: 'https://images.unsplash.com/photo-1693935597805-f574d2fdc0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the ocean',
      url: 'https://images.unsplash.com/photo-1693761935216-a2f3a7017795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
  ]

  // abc(i:any,currentPage:any){
  //   console.log('i',i + ' ' +'cp', currentPage + ' ' +'assign', currentPage=i)
  // }

  checkWindowIndex(index:number){
    return Math.abs(this.currentPage - index) < 5
  }
}
