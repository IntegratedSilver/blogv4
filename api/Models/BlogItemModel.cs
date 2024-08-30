using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models;

public class BlogItemModel
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string? PublisherName { get; set; }
    public string? Tag { get; set; }
    public string? Title { get; set; }
    public string? Image { get; set; }
    public string? Description { get; set; }
    public string? Date { get; set; }
    public string? Category { get; set; }
    public bool IsPublished { get; set; }
    public bool IsDeleted { get; set; }

    public BlogItemModel()
    {
        
    }
    
}
