---
title: Building Forms
tags: templates, fields
slug: building-forms
sections:
  - slug: using-a-template
    name: Using A Template
  - slug: building-from-scratch
    name: Building From Scratch
  - slug: adding-fields
    name: Adding Fields
---
<!-- img_url is dynamically built. The "assign ...." line shouldn't be edited. -->
{% assign img_url = site.url | append: '/assets/img/' | append: page.slug %}
<!-- Content Starts Below This Line -->

<h2 id="{{ page.slug }}">{{ page.title }}</h2>

<div class="row">
    <div class="col">
        In your WordPress dashboard, click "Add New" under the "Forms" menu. (You can also click "Add New Form" on your "All Forms" page.)
    </div>
    <div class="col">
        <img src="{{ img_url }}/MlnP0WDzJpEQ9xTYbwQcfA_img_0.png" />
    </div>
</div>

<h3 id="using-a-template">Using a Template</h3>

<div class="row">
    <div class="col">
        When you create a new form, you will be presented with several template options.  Click one to automatically apply fields (and styling!) to your form.
    </div>
    <div class="col">
        <img src="{{ img_url }}/MlnP0WDzJpEQ9xTYbwQcfA_img_1.png" />
    </div>
</div>

<h3 id="building-from-scratch">Building from Scratch</h3>

<h4 id="adding-fields">Adding Fields</h4>

<div class="row">
    <div class="col">
        To add your own fields without using a template, use the blue "Add Field" button in the bottom right to open the fields drawer.
    </div>
    <div class="col">
        <img src="{{ img_url }}/MlnP0WDzJpEQ9xTYbwQcfA_img_2.png" />
    </div>
</div>

<div class="row">
    <div class="col">
        Single-click or drag the fields from the drawer into the builder
    </div>
    <div class="col">
        <img src="{{ img_url }}/MlnP0WDzJpEQ9xTYbwQcfA_img_3.png" />
    </div>
</div>

<div class="row">
    <div class="col">
        When you have finished adding fields, click "Done".
    </div>
    <div class="col">
        <img src="{{ img_url }}/MlnP0WDzJpEQ9xTYbwQcfA_img_4.png" />
    </div>
</div>

<h4 id="adding-fields">Editing Field Settings</h4>

<div class="row">
    <div class="col">
        To change the field label, label placement, force a field to be required and more simply click on the field to open its settings drawer.  You may also click the blue gear icon to open the field settings drawer.  This drawer is different for each field type.  For a detailed breakdown of field types,[ see the documentation here](https://ninjaforms.com/docs/field-types/).
    </div>
    <div class="col">
        <img src="{{ img_url }}/MlnP0WDzJpEQ9xTYbwQcfA_img_5.png" />
    </div>
</div>

<h4 id="adding-fields">Duplicating or Deleting Fields</h4>

<div class="row">
    <div class="col">
        Hover over the blue gear icon in each field to expand the duplicate and delete icons.
    </div>
    <div class="col">
        <img src="{{ img_url }}/MlnP0WDzJpEQ9xTYbwQcfA_img_6.png" />
    </div>
</div>

<h4 id="adding-fields">Preview the Form</h4>

<div class="row">
    <div class="col">
        Preview any form changes *without impacting users on the front end of your site* with the preview button here:
    </div>
    <div class="col">
        <img src="{{ img_url }}/MlnP0WDzJpEQ9xTYbwQcfA_img_7.png" />
    </div>
</div>

<h4 id="adding-fields">Publish the Form</h4>

<div class="row">
    <div class="col">
        Once you are ready to push your form changes live to the front end of your site, click "Publish."
    </div>
    <div class="col">
        <img src="{{ img_url }}/MlnP0WDzJpEQ9xTYbwQcfA_img_8.png" />
    </div>
</div>

<h3 id="building-from-scratch">Tips and Tricks</h3>

<h4 id="adding-fields">Undo Recent Changes</h4>

<div class="row">
    <div class="col">
        Next to the publish button, click the "Rewind" icon to open the Undo Manager.
    </div>
    <div class="col">
        <img src="{{ img_url }}/MlnP0WDzJpEQ9xTYbwQcfA_img_9.png" />
    </div>
</div>

<div class="row">
    <div class="col">
        Here, you can undo any or all recent changes to your form:
    </div>
    <div class="col">
        <img src="{{ img_url }}/MlnP0WDzJpEQ9xTYbwQcfA_img_10.png" />
    </div>
</div>

<h4 id="adding-fields">Save a Field to Reuse Later</h4>

<div class="row">
    <div class="col">
        To save all field settings including label, list values, styling classes, and more to reuse later, click the "star" icon in the field settings drawer.  That will add a copy of your field to the "Add Field" drawer to be added to the current form (or even a different form) at a later time.
    </div>
    <div class="col">
        <img src="{{ img_url }}/MlnP0WDzJpEQ9xTYbwQcfA_img_11.png" />
    </div>
</div>

<div class="row">
    <div class="col">
        The field appears in the "Add Field" drawer:
    </div>
    <div class="col">
        <img src="{{ img_url }}/MlnP0WDzJpEQ9xTYbwQcfA_img_12.png" />
    </div>
</div>
