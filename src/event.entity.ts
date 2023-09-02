import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'when_date' })
  when: Date;

  @Column()
  description: string;

  @Column()
  address: string;
}
