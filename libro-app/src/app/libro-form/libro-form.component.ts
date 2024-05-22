import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css'],
  providers: [LibroService]
})
export class LibroFormComponent implements OnInit {
  id!: number;
  libro: any = { title: '', author: '' };

  constructor(private route: ActivatedRoute, private router: Router, private libroService: LibroService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.libroService.getLibroById(this.id).subscribe(data => {
        this.libro = data;
      });
    }
  }

  onSubmit() {
    if (this.id) {
      this.libroService.updateLibro(this.id, this.libro).subscribe(data => {
        this.router.navigate(['/']);
      });
    } else {
      this.libroService.createLibro(this.libro).subscribe(data => {
        this.router.navigate(['/']);
      });
    }
  }
}
