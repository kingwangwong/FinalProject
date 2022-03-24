package com.generation.ItemsAPI.service;

import com.generation.ItemsAPI.entity.Item;

import java.util.List;

public interface ItemService {
    public Item saveItem(Item item);

    public List<Item> fetchItemList();

    public Item fetchItemById(Long itemId);

    public void deleteItemById(Long itemId);

    public Item updateItem(Long itemId, Item item);
}
