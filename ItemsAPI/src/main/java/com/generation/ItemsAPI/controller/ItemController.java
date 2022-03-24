package com.generation.ItemsAPI.controller;


import com.generation.ItemsAPI.entity.Item;
import com.generation.ItemsAPI.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.GeneratedValue;
import java.util.List;

@RestController
public class ItemController {

    @Autowired
    private ItemService itemService;

    @PostMapping("/item-form")
    public Item saveItem(@RequestBody Item item) {
        return itemService.saveItem(item);
    }

    @GetMapping("/items")
    public List<Item> fetchItemList() {
        return itemService.fetchItemList();
    }

    @GetMapping("/items/{id}")
    public Item fetchItemById(@PathVariable("id") Long itemId) {
        return itemService.fetchItemById(itemId);
    }

    @DeleteMapping("/items/{id}")
    public String deleteItemById(@PathVariable("id") Long itemId) {
        itemService.deleteItemById(itemId);
        return "Item deleted";
    }

    @PutMapping("/items/{id}")
    public Item updateItem(@PathVariable("id") Long itemId, @RequestBody Item item) {
        return itemService.updateItem(itemId, item);
    }


}
