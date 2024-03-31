import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Contact } from './contact.interface';

@Controller('contacts')

export class ContactsController {
  private contacts: Contact[] = [];

  @Get()
  getAllContacts(): Contact[] {
    return this.contacts;
  }

  @Get(':id')
  getContactById(@Param('id') id: string): Contact {
    return this.contacts.find(contact => contact.id === id);
  }

  @Post()
  createContact(@Body() contact: Contact): Contact {
    this.contacts.push(contact);
    return contact;
  }

  @Put(':id')
  updateContact(@Param('id') id: string, @Body() updatedContact: Contact): Contact {
    const index = this.contacts.findIndex(contact => contact.id === id);
    this.contacts[index] = updatedContact;
    return updatedContact;
  }

  @Delete(':id')
  deleteContact(@Param('id') id: string): Contact {
    const index = this.contacts.findIndex(contact => contact.id === id);
    const deletedContact = this.contacts[index];
    this.contacts.splice(index, 1);
    return deletedContact;
  }
}
